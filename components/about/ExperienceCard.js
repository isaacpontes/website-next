import Image from 'next/image';
import Columns from "../common/Columns";
import { useIntl } from 'react-intl';

export default function ExperienceCard() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <div className="card mb-5">
      <div className="card-content">
        <h5 className="title is-5">
          {_f("myProfessionalExperience")}
        </h5>

        <Columns vcenter={true}>
          <Columns.Column size="one-fifth">
            <div className="is-flex is-justify-content-center">
              <Image src="/symbol_basic_color.svg" alt="Logo da PMSF" height={150} width={126} />
            </div>
          </Columns.Column>

          <Columns.Column size="four-fifths">
            <h6 className="title is-6">
              {_f("freelancerDeveloper")}
            </h6>
            <p className="subtitle is-7">
              {_f("period")}: 2018 - {_f("now")}
            </p>
            <p>
              {_f("freelancerDescription")}
            </p>
          </Columns.Column>
        </Columns>
        <hr />
        <Columns vcenter={true}>
          <Columns.Column size="one-fifth">
            <div className="is-flex is-justify-content-center">
              <Image src="/assets/img/pmsf.webp" alt="Logo da PMSF" height={150} width={126} />
            </div>
          </Columns.Column>

          <Columns.Column size="four-fifths">
            <h6 className="title is-6">
              {`${_f("itTechnician")} ${_f("at")} Prefeitura Municipal de São Fidélis`}
            </h6>
            <p className="subtitle is-7">
              {_f("period")}: 2016 - {_f("now")}
            </p>
            <p>
              {_f("pmsfDescription")}
            </p>
          </Columns.Column>
        </Columns>
      </div>
    </div>
  )
}