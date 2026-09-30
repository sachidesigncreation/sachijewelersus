'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { normalizeR2Image } from '@/lib/r2/config';

type Section = {
  id: string;
  type: string;
  sortOrder: number;
  isVisible: boolean;
  props: Record<string, unknown>;
};

type Page = {
  id: string;
  slug: string;
  title: string;
  navLabel: string | null;
  showInNav: boolean;
  navOrder: number;
  status: string;
  metaDescription: string | null;
  sections: Section[];
};

const SECTION_TYPES = [
  { id: 'hero', label: 'Hero banner' },
  { id: 'text_image', label: 'Text + image' },
  { id: 'cards', label: 'Cards grid' },
  { id: 'stats', label: 'Stats band' },
  { id: 'gallery', label: 'Image gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'cta', label: 'Call to action' },
] as const;

const inputCls =
  'w-full bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors';
const labelCls = 'block text-[11px] uppercase tracking-widest text-warm font-dm-sans mb-1';

const str = (v: unknown): string => (typeof v === 'string' ? v : '');

function TextField({ label, value, onChange, textarea, rows, mono }: {
  label: string; value: string; onChange: (v: string) => void; textarea?: boolean; rows?: number; mono?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows ?? 3}
          className={`${inputCls} ${mono ? 'font-mono' : ''}`} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} ${mono ? 'font-mono' : ''}`} />
      )}
    </label>
  );
}

function ImageInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const preview = normalizeR2Image(value) ?? (value.startsWith('/') ? value : null);
  const upload = async (f: File | undefined) => {
    if (!f) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', f);
      form.append('folder', 'cms');
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (data.key) onChange(data.key);
    } catch { /* ignore */ }
    setUploading(false);
  };
  return (
    <div className="border border-black/10 p-3 bg-white/50">
      <span className={labelCls}>{label}</span>
      {preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="" className="w-full h-28 object-cover mb-2 border border-gold/20" />
      ) : null}
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="/image.webp or upload…" className={inputCls} />
      <label className="text-xs font-dm-sans text-gold-deep underline cursor-pointer inline-block mt-2">
        {uploading ? 'Uploading…' : 'Upload image'}
        <input type="file" accept="image/*" className="hidden" onChange={(e) => upload(e.target.files?.[0])} />
      </label>
    </div>
  );
}

/** Generic key-value list editor for items: [{title, desc}] etc. */
function ItemsEditor({ items, onChange, fields }: {
  items: Record<string, unknown>[];
  onChange: (v: Record<string, unknown>[]) => void;
  fields: { key: string; label: string; textarea?: boolean }[];
}) {
  const set = (i: number, k: string, v: string) =>
    onChange(items.map((it, j) => (j === i ? { ...it, [k]: v } : it)));
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="border border-black/10 p-3 bg-white/40 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[11px] uppercase tracking-widest font-dm-sans text-charcoal">Item {i + 1}</span>
            <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))}
              className="text-xs text-red-600 underline font-dm-sans">Remove</button>
          </div>
          {fields.map((f) => (
            <TextField key={f.key} label={f.label} value={str(it[f.key])}
              onChange={(v) => set(i, f.key, v)} textarea={f.textarea} />
          ))}
        </div>
      ))}
      <button type="button"
        onClick={() => onChange([...items, Object.fromEntries(fields.map((f) => [f.key, '']))])}
        className="text-xs font-dm-sans uppercase tracking-widest border border-gold/40 px-4 py-2 hover:border-gold">
        + Add item
      </button>
    </div>
  );
}

function SectionPropsEditor({ type, props, onChange }: {
  type: string; props: Record<string, unknown>; onChange: (p: Record<string, unknown>) => void;
}) {
  const set = (k: string, v: unknown) => onChange({ ...props, [k]: v });
  const items = Array.isArray(props.items) ? (props.items as Record<string, unknown>[]) : [];

  switch (type) {
    case 'hero':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <TextField label="Eyebrow" value={str(props.eyebrow)} onChange={(v) => set('eyebrow', v)} />
          <div />
          <div className="md:col-span-2"><TextField label="Heading" value={str(props.heading)} onChange={(v) => set('heading', v)} /></div>
          <div className="md:col-span-2"><TextField label="Subtext" value={str(props.subtext)} onChange={(v) => set('subtext', v)} textarea /></div>
          <TextField label="Primary button label" value={str(props.primaryLabel)} onChange={(v) => set('primaryLabel', v)} />
          <TextField label="Primary button link" value={str(props.primaryHref)} onChange={(v) => set('primaryHref', v)} mono />
          <TextField label="Secondary button label" value={str(props.secondaryLabel)} onChange={(v) => set('secondaryLabel', v)} />
          <TextField label="Secondary button link" value={str(props.secondaryHref)} onChange={(v) => set('secondaryHref', v)} mono />
          <div className="md:col-span-2"><ImageInput label="Background / hero image (optional)" value={str(props.image)} onChange={(v) => set('image', v)} /></div>
        </div>
      );
    case 'text_image':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <TextField label="Eyebrow" value={str(props.eyebrow)} onChange={(v) => set('eyebrow', v)} />
          <label className="block">
            <span className={labelCls}>Image side</span>
            <select value={str(props.align) || 'left'} onChange={(e) => set('align', e.target.value)} className={inputCls}>
              <option value="left">Image right (text left)</option>
              <option value="right">Image left (text right)</option>
            </select>
          </label>
          <div className="md:col-span-2"><TextField label="Heading" value={str(props.heading)} onChange={(v) => set('heading', v)} /></div>
          <div className="md:col-span-2"><TextField label="Text" value={str(props.text)} onChange={(v) => set('text', v)} textarea rows={5} /></div>
          <div className="md:col-span-2"><ImageInput label="Image" value={str(props.image)} onChange={(v) => set('image', v)} /></div>
          <TextField label="Image alt" value={str(props.imageAlt)} onChange={(v) => set('imageAlt', v)} />
          <TextField label="Button label (optional)" value={str(props.primaryLabel)} onChange={(v) => set('primaryLabel', v)} />
          <TextField label="Button link" value={str(props.primaryHref)} onChange={(v) => set('primaryHref', v)} mono />
        </div>
      );
    case 'cards':
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TextField label="Eyebrow" value={str(props.eyebrow)} onChange={(v) => set('eyebrow', v)} />
            <TextField label="Heading" value={str(props.heading)} onChange={(v) => set('heading', v)} />
          </div>
          <TextField label="Subtext" value={str(props.subtext)} onChange={(v) => set('subtext', v)} textarea rows={2} />
          <ItemsEditor items={items} onChange={(v) => set('items', v)}
            fields={[{ key: 'title', label: 'Title' }, { key: 'desc', label: 'Description', textarea: true }]} />
        </div>
      );
    case 'stats':
      return (
        <div className="space-y-3">
          <TextField label="Heading (optional)" value={str(props.heading)} onChange={(v) => set('heading', v)} />
          <ItemsEditor items={items} onChange={(v) => set('items', v)}
            fields={[{ key: 'value', label: 'Value (e.g. 150+)' }, { key: 'label', label: 'Label' }]} />
        </div>
      );
    case 'gallery': {
      const images = Array.isArray(props.images) ? (props.images as string[]) : [];
      return (
        <div className="space-y-3">
          <TextField label="Heading (optional)" value={str(props.heading)} onChange={(v) => set('heading', v)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {images.map((im, i) => (
              <ImageInput key={i} label={`Image ${i + 1}`} value={typeof im === 'string' ? im : ''}
                onChange={(v) => set('images', images.map((x, j) => (j === i ? v : x)))} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => set('images', [...images, ''])}
              className="text-xs font-dm-sans uppercase tracking-widest border border-gold/40 px-4 py-2 hover:border-gold">+ Add image</button>
            {images.length > 0 ? (
              <button type="button" onClick={() => set('images', images.slice(0, -1))}
                className="text-xs font-dm-sans uppercase tracking-widest border border-black/10 px-4 py-2 hover:border-red-400 text-warm">− Remove last</button>
            ) : null}
          </div>
        </div>
      );
    }
    case 'testimonials':
      return (
        <div className="space-y-3">
          <TextField label="Heading" value={str(props.heading)} onChange={(v) => set('heading', v)} />
          <ItemsEditor items={items} onChange={(v) => set('items', v)}
            fields={[{ key: 'text', label: 'Quote', textarea: true }, { key: 'author', label: 'Author' }, { key: 'role', label: 'Role' }]} />
        </div>
      );
    case 'cta':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2"><TextField label="Heading" value={str(props.heading)} onChange={(v) => set('heading', v)} /></div>
          <div className="md:col-span-2"><TextField label="Text" value={str(props.text)} onChange={(v) => set('text', v)} textarea rows={2} /></div>
          <TextField label="Button label" value={str(props.buttonLabel)} onChange={(v) => set('buttonLabel', v)} />
          <TextField label="Button link" value={str(props.buttonHref)} onChange={(v) => set('buttonHref', v)} mono />
        </div>
      );
    default:
      return (
        <TextField label="Raw JSON props" value={JSON.stringify(props, null, 2)}
          onChange={(v) => { try { onChange(JSON.parse(v)); } catch { /* ignore */ } }} textarea rows={6} mono />
      );
  }
}

export default function PageEditor({ initial }: { initial: Page }) {
  const router = useRouter();
  const [page, setPage] = useState<Page>(initial);
  const [subTab, setSubTab] = useState<'settings' | 'sections'>('sections');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [newType, setNewType] = useState<string>('text_image');
  const [adding, setAdding] = useState(false);
  const [dirtySections, setDirtySections] = useState<Record<string, boolean>>({});

  const patch = (p: Partial<Page>) => setPage((pg) => ({ ...pg, ...p }));

  const saveSettings = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/pages/${page.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: page.title, slug: page.slug, status: page.status,
          showInNav: page.showInNav, navLabel: page.navLabel,
          navOrder: page.navOrder, metaDescription: page.metaDescription,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setPage((pg) => ({ ...pg, ...data.page }));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      router.refresh();
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
    }
    setSaving(false);
  };

  const saveSection = async (s: Section) => {
    try {
      const res = await fetch(`/api/admin/pages/${page.id}/sections/${s.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ props: s.props, isVisible: s.isVisible, type: s.type }),
      });
      if (!res.ok) throw new Error('Section save failed');
      setDirtySections((d) => ({ ...d, [s.id]: false }));
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
    }
  };

  const addSection = async () => {
    setAdding(true);
    try {
      const res = await fetch(`/api/admin/pages/${page.id}/sections`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: newType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to add section');
      setPage((pg) => ({ ...pg, sections: [...pg.sections, data.section] }));
    } catch (e) {
      setError(String(e instanceof Error ? e.message : e));
    }
    setAdding(false);
  };

  const deleteSection = async (id: string) => {
    if (!confirm('Delete this section?')) return;
    await fetch(`/api/admin/pages/${page.id}/sections/${id}`, { method: 'DELETE' });
    setPage((pg) => ({ ...pg, sections: pg.sections.filter((s) => s.id !== id) }));
  };

  const move = async (index: number, dir: -1 | 1) => {
    const next = [...page.sections];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    setPage((pg) => ({ ...pg, sections: next }));
    await fetch(`/api/admin/pages/${page.id}/sections`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order: next.map((s) => s.id) }),
    });
  };

  const editSection = (id: string, patchS: Partial<Section>) => {
    setPage((pg) => ({
      ...pg,
      sections: pg.sections.map((s) => (s.id === id ? { ...s, ...patchS } : s)),
    }));
    setDirtySections((d) => ({ ...d, [id]: true }));
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 text-xs font-dm-sans mb-2">
          <Link href="/admin/pages" className="text-gold-deep underline">← All pages</Link>
          {page.status === 'PUBLISHED' ? (
            <Link href={`/${page.slug}`} target="_blank" className="text-gold-deep underline">View live ↗</Link>
          ) : (
            <span className="text-warm">Draft — publish to go live</span>
          )}
        </div>
        <h1 className="font-cormorant text-3xl text-charcoal">Editing: {page.title}</h1>
        <p className="font-mono text-xs text-warm mt-1">/{page.slug} · {page.sections.length} section{page.sections.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Sub-tabs keep settings and content editing separate */}
      <div className="flex gap-2">
        {([
          { id: 'sections', label: `Sections (${page.sections.length})` },
          { id: 'settings', label: 'Page settings' },
        ] as const).map((t) => (
          <button
            key={t.id}
            onClick={() => setSubTab(t.id)}
            className={`px-4 py-2 text-[11px] uppercase tracking-widest font-dm-sans border transition-colors ${
              subTab === t.id ? 'bg-jet text-ivory border-jet' : 'border-black/10 text-warm hover:border-gold hover:text-charcoal'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subTab === 'settings' && (
      <div className="border border-black/10 bg-pearl/50 p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className={labelCls}>Title</span>
            <input value={page.title} onChange={(e) => patch({ title: e.target.value })} className={inputCls} />
          </label>
          <label className="block">
            <span className={labelCls}>URL slug (/…)</span>
            <input value={page.slug} onChange={(e) => patch({ slug: e.target.value })} className={`${inputCls} font-mono`} />
          </label>
          <label className="block">
            <span className={labelCls}>Status</span>
            <select value={page.status} onChange={(e) => patch({ status: e.target.value })} className={inputCls}>
              <option value="DRAFT">Draft (hidden)</option>
              <option value="PUBLISHED">Published (live)</option>
            </select>
          </label>
          <label className="block">
            <span className={labelCls}>Navbar order</span>
            <input type="number" value={page.navOrder} onChange={(e) => patch({ navOrder: Number(e.target.value) || 0 })} className={inputCls} />
          </label>
          <label className="block">
            <span className={labelCls}>Navbar label (defaults to title)</span>
            <input value={page.navLabel || ''} onChange={(e) => patch({ navLabel: e.target.value })} className={inputCls} />
          </label>
          <label className="flex items-center gap-2 font-dm-sans text-sm text-charcoal pt-5">
            <input type="checkbox" checked={page.showInNav} onChange={(e) => patch({ showInNav: e.target.checked })} className="accent-gold" />
            Show in navbar
          </label>
        </div>
        <label className="block">
          <span className={labelCls}>SEO description</span>
          <textarea value={page.metaDescription || ''} onChange={(e) => patch({ metaDescription: e.target.value })} rows={2} className={inputCls} />
        </label>
        <div className="flex items-center gap-3">
          <button onClick={saveSettings} disabled={saving} className="btn-primary disabled:opacity-50">
            {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save page settings'}
          </button>
          {error ? <span className="text-red-600 text-xs font-dm-sans">{error}</span> : null}
        </div>
      </div>
      )}

      {subTab === 'sections' && (
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal">
            Sections ({page.sections.length})
          </h2>
          <div className="flex gap-2 items-center">
            <select value={newType} onChange={(e) => setNewType(e.target.value)} className="bg-ivory border border-black/10 px-3 py-2 font-dm-sans text-xs">
              {SECTION_TYPES.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
            <button onClick={addSection} disabled={adding} className="btn-secondary disabled:opacity-50 !py-2">
              {adding ? 'Adding…' : '+ Add section'}
            </button>
          </div>
        </div>

        {page.sections.map((s, i) => (
          <div key={s.id} className={`border p-5 space-y-4 ${s.isVisible ? 'border-black/10 bg-ivory' : 'border-dashed border-black/20 bg-black/[0.02] opacity-80'}`}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-dm-sans uppercase tracking-widest bg-jet text-ivory px-2 py-1">
                {i + 1} · {SECTION_TYPES.find((t) => t.id === s.type)?.label || s.type}
              </span>
              <div className="flex-1" />
              <label className="flex items-center gap-1.5 text-xs font-dm-sans text-warm">
                Background
                <select
                  value={typeof s.props.bg === 'string' ? s.props.bg : ''}
                  onChange={(e) => {
                    const next = { ...(s.props as Record<string, unknown>) };
                    if (e.target.value) next.bg = e.target.value;
                    else delete next.bg;
                    editSection(s.id, { props: next });
                  }}
                  className="bg-ivory border border-black/10 px-2 py-1 text-charcoal focus:outline-none focus:border-gold"
                >
                  <option value="">Designed default</option>
                  <option value="ivory">Ivory</option>
                  <option value="pearl">Pearl</option>
                  <option value="jet">Jet (dark)</option>
                  <option value="gold">Gold</option>
                </select>
              </label>
              <button onClick={() => move(i, -1)} disabled={i === 0} className="text-xs font-dm-sans border border-black/10 px-2 py-1 disabled:opacity-30">↑</button>
              <button onClick={() => move(i, 1)} disabled={i === page.sections.length - 1} className="text-xs font-dm-sans border border-black/10 px-2 py-1 disabled:opacity-30">↓</button>
              <button
                onClick={() => { editSection(s.id, { isVisible: !s.isVisible }); setTimeout(() => saveSection({ ...s, isVisible: !s.isVisible }), 0); }}
                className="text-xs font-dm-sans border border-black/10 px-2 py-1">
                {s.isVisible ? 'Hide' : 'Show'}
              </button>
              <button onClick={() => deleteSection(s.id)} className="text-xs font-dm-sans text-red-600 underline">Delete</button>
            </div>
            <SectionPropsEditor
              type={s.type}
              props={s.props}
              onChange={(p) => editSection(s.id, { props: p })}
            />
            <div>
              <button onClick={() => saveSection(s)} className="btn-primary !py-2 !px-5 text-[11px]">
                {dirtySections[s.id] ? 'Save section *' : 'Save section'}
              </button>
            </div>
          </div>
        ))}

        {page.sections.length === 0 ? (
          <p className="text-warm font-dm-sans text-sm text-center py-8 border border-dashed border-black/10">
            No sections yet — add your first section above.
          </p>
        ) : null}
      </div>
      )}
    </div>
  );
}
