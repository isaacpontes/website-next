import Columns from "../common/Columns";

export default function Intro() {
  return (
    <section className="mb-5">
      <Columns vcenter={true}>
        <Columns.Column size={5}>
          <h1 className="title is-1 has-text-weight-bold">
            Blog.
          </h1>
        </Columns.Column>

        <Columns.Column size={7}>
          <h4 className="subtitle has-text-right">
            A statically generated blog example using{' '}
            <a
              href="https://nextjs.org/"
              className="underline hover:text-success duration-200 transition-colors"
            >
              Next.js
            </a>{' '}
            and Markdown.
          </h4>
        </Columns.Column>
      </Columns>
    </section>
  )
}