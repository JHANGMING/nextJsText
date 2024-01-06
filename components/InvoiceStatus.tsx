import clsx from 'clsx'
type Status = {
  status: string
  onClick: () => void
}
export default function InvoiceStatus({ status,onClick }: Status) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('inline-flex items-center rounded-full px-2 py-1 text-sm', {
        'bg-green-500 text-white': status === 'paid', // 当状态为'paid'时，应用这些类
        'bg-gray-100 text-gray-500': status === 'pending', // 当状态为'pending'时，应用这些类
      })}
    >
      {status}
    </button>
  )
}
