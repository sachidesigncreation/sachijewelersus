'use client';

import { useState } from 'react';

type Field = {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  note?: string;
};

type Section = {
  section: string;
  note?: string;
  fields: Field[];
};

const FIELDS: Section[] = [
  {
    section: 'Pricing Formula',
    note: 'P = w × m × wastageFactor  +  N × (s + st)  +  L × w  +  platingFactor × w × m',
    fields: [
      { key: 'wastageFactor',     label: 'Wastage Factor',             type: 'number', placeholder: '1.07', note: 'Metal wastage multiplier applied to metal cost. Industry standard is 1.07 (7% wastage).' },
      { key: 'labourCostPerGram', label: 'Labour Cost L (USD/g)',      type: 'number', placeholder: '0.50', note: 'Global labour cost per gram. Overridden per product if "Per-Product Labour Override" is set > 0.' },
      { key: 'platingCostFactor', label: 'Plating Cost Factor P',      type: 'number', placeholder: '0.05', note: 'Dimensionless factor applied as: P × weight × metal-spot-price. E.g. 0.05 = 5% of metal value.' },
    ],
  },
  {
    section: 'Currency',
    fields: [
      { key: 'exchangeRateUSDtoINR', label: 'USD → INR Exchange Rate', type: 'number', placeholder: '83.5', note: 'Used wherever prices are shown in INR.' },
      { key: 'defaultCurrency', label: 'Website Currency', type: 'currency', note: 'The currency all website prices, estimates and quote totals are shown in.' },
    ],
  },
  {
    section: 'Display',
    fields: [
      { key: 'showPricingToClients', label: 'Show Pricing to Approved Clients', type: 'toggle', note: 'If off, pricing is hidden from the catalogue for all logged-in clients.' },
    ],
  },
];

export default function SettingsForm({ initial }: { initial: Record<string, string> }) {
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const set = (key: string, value: string) => setValues(v => ({ ...v, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const inputClass = "bg-ivory border border-black/10 px-4 py-2.5 font-dm-sans text-sm text-charcoal focus:outline-none focus:border-gold transition-colors w-48";
  const labelClass = "block text-xs uppercase tracking-widest text-warm font-dm-sans mb-1.5";

  return (
    <div className="space-y-10">
      {FIELDS.map(section => (
        <div key={section.section}>
          <h2 className="font-dm-sans text-xs uppercase tracking-widest text-charcoal mb-1">{section.section}</h2>
          {section.note && (
            <p className="text-[10px] font-mono text-warm bg-black/5 px-3 py-1.5 mb-4 inline-block">{section.note}</p>
          )}
          <div className="space-y-6">
            {section.fields.map(field => (
              <div key={field.key}>
                <label className={labelClass}>{field.label}</label>
                {field.type === 'toggle' ? (
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => set(field.key, values[field.key] === 'true' ? 'false' : 'true')}
                      className={`w-10 h-5 rounded-full transition-colors relative ${values[field.key] === 'true' ? 'bg-gold' : 'bg-black/20'}`}
                    >
                      <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${values[field.key] === 'true' ? 'left-5' : 'left-0.5'}`} />
                    </button>
                    <span className="text-sm font-dm-sans text-charcoal">
                      {values[field.key] === 'true' ? 'Visible' : 'Hidden'}
                    </span>
                  </div>
                ) : field.type === 'currency' ? (
                  <div className="flex gap-2">
                    {(['USD', 'INR'] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => set(field.key, c)}
                        className={`px-5 py-2 font-dm-sans text-xs uppercase tracking-widest border transition-colors ${
                          (values[field.key] || 'USD') === c
                            ? 'bg-jet text-ivory border-jet'
                            : 'border-black/10 text-warm hover:border-gold hover:text-charcoal'
                        }`}
                      >
                        {c === 'USD' ? 'USD ($)' : 'INR (₹)'}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type="number"
                    step="0.001"
                    value={values[field.key] ?? ''}
                    onChange={e => set(field.key, e.target.value)}
                    className={inputClass}
                    placeholder={field.placeholder}
                  />
                )}
                {field.note && <p className="text-[10px] text-warm mt-1 font-dm-sans max-w-sm">{field.note}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSave} disabled={saving} className="btn-primary disabled:opacity-50">
        {saved ? 'Saved ✓' : saving ? 'Saving…' : 'Save Settings'}
      </button>
    </div>
  );
}
