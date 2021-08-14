import Columns from "../common/Columns";
import Section from "../common/Section";

export default function PostBody({ content }) {
  return (
    <>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}