import React from 'react';

import { Typography, Icon } from '../../../components';

const { Heading } = Typography;

const IconPage = () => (
  <>
    <Heading level={1}>
      آیکون
    </Heading>
    <br />
    <br />

    <Heading level={2}>
      نمونه آیکون پیشفرض
    </Heading>
    <Icon name="watch-later" />
    <br />

    <Heading level={2}>
      نمونه آیکون با کامل ترین امکانات
    </Heading>
    <Icon name="watch-later" size="sm" color="green" />
    <br />

    <Heading level={2}>
      آیکون در اندازه های متفاوت
    </Heading>

    <Heading level={3}>
      sm size
    </Heading>
    <div>
      <Icon name="watch-later" size="sm" color="gray" />
      <Icon name="watch-later" size="md" color="gray" />
      <Icon name="watch-later" size="lg" color="gray" />
    </div>
    <br />

    <Heading level={3}>
      md size (default)
    </Heading>
    <Icon name="watch-later" size="md" />
    <br />

    <Heading level={3}>
      lg size
    </Heading>
    <Icon name="watch-later" size="lg" />
    <br />

  </>
);

export default IconPage;
