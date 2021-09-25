import { useIntl } from 'react-intl';

export default function FormationCard() {
  const { formatMessage } = useIntl();
  const _f = (id) => formatMessage({ id });

  return (
    <div className="card mb-5" data-aos="fade-up">
      <div className="card-content">
        <h5 className="title is-5">
          {_f("myAcademicAchievements")}
        </h5>
        <h6 className="title is-6">
          {`${_f("bachelor")} ${_f("by")} ${_f("iff")}`}
        </h6>
        <p className="subtitle is-7">
          {_f("conclusionYear")}: 2017
        </p>
        <p>
          {_f("bachelorDescription")}
        </p>
        <hr />
        <h6 className="title is-6">
          {`${_f("itTechnician")} ${_f("by")} ${_f("iff")}`}
        </h6>
        <p className="subtitle is-7">
          {_f("conclusionYear")}: 2012
        </p>
        <p>
          {_f("technicianDescription")}
        </p>
      </div>
    </div>
  )
}