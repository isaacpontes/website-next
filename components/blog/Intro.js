import Columns from "../common/Columns";
import { useIntl } from "react-intl";

export default function Intro() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <section className="mb-5">
      <Columns vcenter={true}>
        <Columns.Column size={5}>
          <h1 className="title is-1 has-text-weight-bold">
            {_f("blogTitle")}
          </h1>
        </Columns.Column>

        <Columns.Column size={7}>
          <h4 className="subtitle has-text-right">
            {_f("blogSubtitle")}
          </h4>
        </Columns.Column>
      </Columns>
    </section>
  )
}