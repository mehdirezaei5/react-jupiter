import React from 'react';

import { Typography } from '../../../components';
import ShowDate from '../../../components/show-date';
import CardTemplate from '../../../components/card/card-template';
import { EventCard } from '../../../components/card';

const { Heading } = Typography;

const CardPage = () => (
  <>
    <Heading level={1}>
      کارت
    </Heading>
    <ShowDate date={new Date()} />
    <br />
    <EventCard
      type="square"
      title="تایتل یک رویداد نسبتا طولانی در اینجاست که قرار است اضافه بیاید و بزند به بیرون"
      cover="https://static.evand.net/images/events/covers/original/2e6f40ac8e1bc78304ccf3fd77b1b3d5.jpg"
      date="2020-01-10T14:00:00+0330"
      place="تهران"
      price="از ۴۴۰۰۰ تومان"
      organizationLogo="https://static.evand.net/images/organizations/logos/original/e90483ade453446ae2fd156e15244d04.jpg"
      organizationName="هلدینگ کلان - مجتمع فنی پلی تکنیک - شرکت تجارت جهانی اندیشه"
      organizationSlug="drskill"
      onClickBookmark={() => { window.console.log('handle click bookmark'); }}
    />
    <br />
    <CardTemplate hoverToLevel={2}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={2} hoverToLevel={4}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={3} maxWidth="400" linkTo="/test/ds" hoverToLevel={4}>
      <div>
        <Heading>Hello empty card. Hello empty card. Hello empty card.Hello empty card. Hello empty card. Hello empty card.</Heading>
      </div>
    </CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={4}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />
    <CardTemplate level={5}><div>Hello empty card</div></CardTemplate>
    <br />
    <br />
    <br />
    <br />

  </>
);

export default CardPage;
