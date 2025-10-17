import { baseIconConfigs } from '../../constants';

export function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...baseIconConfigs}
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M12.657.656 11.813 2.5 10 3.344l1.813.844.844 1.813.844-1.813 1.844-.844L13.5 2.5zM6 2.656 4.344 6.344.656 8l3.688 1.657L6 13.344l1.657-3.687L11.344 8 7.657 6.344zM12.657 10l-.844 1.812-1.813.844 1.813.844.844 1.844.844-1.844 1.844-.844-1.844-.844z" />
    </svg>
  );
}
