export const YouTube: React.FC<{ id: string }> = ({ id }) => (
  <iframe
    width="560"
    height="315"
    style={{ margin: "10px auto" }}
    src={`https://www.youtube-nocookie.com/embed/${id}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
);
