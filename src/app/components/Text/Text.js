import clsx from 'clsx'

export const Text = ({ children, className, pink, title, subtitle }) => {
  return (
    <p
      className={clsx(
        pink && 'text-pink-600',
        title && 'text-2xl font-semibold',
        subtitle && 'text-xl',
        className,
      )}
    >
      {children}
    </p>
  )
}
