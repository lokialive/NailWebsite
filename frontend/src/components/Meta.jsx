import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'NailParty: Nails that slay',
  description: 'Press on, party on!',
  keywords: 'nails, beauty, party, sales',
};

export default Meta;
