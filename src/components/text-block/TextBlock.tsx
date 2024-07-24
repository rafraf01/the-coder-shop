import classNames from "classnames";
import "./text-block.css";

interface TextBlockProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

const TextBlock = ({ children, className, title }: TextBlockProps) => {
  return (
    <div className="text-block mx-6 my-4 bg-white text-center">
      <article className={classNames(className, "mx-40 my-40")}>
        {title && (
          <h1 className="font-climatecrisis mb-10 tracking-wide">
            {title}
            <span className="stroke-text text-5xl font-bold text-transparent">
              wonderful
            </span>
          </h1>
        )}
        {children}
      </article>
    </div>
  );
};

export default TextBlock;
