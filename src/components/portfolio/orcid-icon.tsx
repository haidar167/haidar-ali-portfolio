// ORCID iD icon — official ORCID logo shape (green circle + white "iD")
export function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="#A6CE39"
        d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"
      />
      <path
        fill="#FFFFFF"
        d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 28.5-22.3 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.2 0 42.9-26.5 42.9-39.7 0-13.2-8.7-39.7-42.9-39.7h-24.5v79.4z"
      />
      <path
        fill="#FFFFFF"
        d="M88.7 56.8c0 5.5-4.5 10.1-10.1 10.1-5.5 0-10.1-4.6-10.1-10.1 0-5.5 4.5-10.1 10.1-10.1 5.6 0 10.1 4.6 10.1 10.1z"
      />
    </svg>
  );
}
