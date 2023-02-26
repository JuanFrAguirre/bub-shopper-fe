import clsx from 'clsx'

export const Text = ({ children, className, primary, title, subtitle }) => {
  return (
    <p
      className={clsx(
        primary && 'text-primary-600',
        title && 'text-2xl font-semibold',
        subtitle && 'text-xl',
        className,
      )}
    >
      {children}
    </p>
  )
}
