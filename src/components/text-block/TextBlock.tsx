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
      <article className={classNames(className, "lg:my-40 my-10 grid justify-center")}>
        {title && (
          <h1 className="font-climatecrisis mb-10 tracking-wide xl:text-3xl text-2xl text-wrap">
            {title}
            <span className="stroke-text text-2xl font-bold text-transparent lg:text-5xl block">
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
