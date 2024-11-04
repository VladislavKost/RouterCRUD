import "./PostItem.css";

export interface INavItemProps {
  label: string;
  link: string;
}

export const PostItem = ({
  post,
}: {
  post: { id: number; content: string; created: number };
}) => {
  
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  };

  return (
    <div className="post">
      <p>{post.content}</p>
      <p>
        Опубликовано: {new Date(post.created).toLocaleString("ru", options)}
      </p>
    </div>
  );
};
