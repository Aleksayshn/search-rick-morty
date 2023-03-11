import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getInfo, alertOnError } from 'services';
import { BackLink, Container, Loader, Card } from 'components';

export default function DetailsPage() {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getCard = async () => {
      try {
        const cardInfo = await getInfo(id);
        setCard(cardInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCard();
  }, [id]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);
  return (
    <main>
      <Container>
        {loading && <Loader />}
        {!!card && (
          <div>
            <BackLink to={backLinkHref}>
              Back to HomePage
            </BackLink>
            <Card card={card} />
          </div>
        )}
      </Container>
    </main>
  );
}
