'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteUserButton({ id, email }: { id: string; email: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const remove = async () => {
    if (!confirm(`Delete user ${email}? They will no longer be able to log in.`)) return;
    setBusy(true);
    await fetch(`/api/admin/clients/${id}`, { method: 'DELETE' });
    setBusy(false);
    router.refresh();
  };

  return (
    <button onClick={remove} disabled={busy} className="text-xs text-red-600 underline disabled:opacity-50">
      {busy ? 'Deleting…' : 'Delete'}
    </button>
  );
}
