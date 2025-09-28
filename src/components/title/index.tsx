interface Props {
  className?: string;
}

export function Title({ className }: Props) {
  return <h2 className={className}>title</h2>;
}
