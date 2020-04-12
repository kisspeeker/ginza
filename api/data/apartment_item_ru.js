module.exports = {
  title: 'Apartment one',
  description: 'Описание страницы',
  keywords: '',
  components: [
    {
      name: 'booking_mini'
    },
    {
      name: 'slider_main_apartment',
      popupVideo: {
        // TODO: popup video
      },
      popupGallery: {
        // TODO: popup gallery
      },
      values: [
        {
          title: 'Karavannaya 11',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: '/',
          linkLabel: 'Посмотреть',
          image: '/images/DSC04920.jpg'
        },
        {
          title: 'Rubinsteina 12',
          city: 'Санкт-Петербург',
          category: 'Апартаменты',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/604/1440/700'
        },
        {
          title: 'Khedi',
          city: 'Тбилиси',
          category: 'Отель',
          url: '/',
          linkLabel: 'Посмотреть',
          image: 'https://picsum.photos/id/594/1440/700'
        }
      ]
    },
    {
      name: 'apartment_head',
      title: 'Karavannaya 11',
      label: 'by Ginza Hotels&Apartments',
      city: 'Санкт-Петербург',
      category: 'Апартаменты',
      description: {
        title: 'Описание',
        text: 'Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский.',
        moreText: 'Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский. Просторные апартаменты расположились на пятом этаже старинного дома на углу Невского проспекта и Караванной улицы, построенного в стиле раннего классицизма 1780-х гг. с треугольными эркерами. Гости апартаментов смогут прикоснуться к истории Петрограда, остановившись водном из исторических центров его литературной жизни. Здесь жил Жуковский, бывали Тургенев и Вяземский.'
      },
      params: [
        {
          type: 'beds',
          value: '3 номера'
        },
        {
          type: 'adult',
          value: '4 гостей'
        },
        {
          type: 'size',
          value: '57м'
        }
      ]
    },
    {
      name: 'features_list',
      title: 'Услуги и удобства',
      values: [
        {
          id: 'batler',
          title: 'Персональный батлер 24/7'
        },
        {
          id: 'babychair',
          title: 'Детский стул'
        },
        {
          id: 'delivery',
          title: 'Доставка еды и напитков'
        },
        {
          id: 'family',
          title: 'Семейные апартаменты'
        },
        {
          id: 'breakfast',
          title: 'Завтрак в номер'
        },
        {
          id: 'elevator',
          title: 'Лифт'
        },
        {
          id: 'coffeemachine',
          title: 'Кофемашина Nespresso'
        },
        {
          id: 'games',
          title: 'Настольные игры'
        },
        {
          id: 'ironing',
          title: 'Гладильные принадлежности'
        },
        {
          id: 'buro',
          title: 'Экскурсионное бюро'
        }
      ]
    },
    {
      name: 'features_comfort',
      title: 'Для вашего комфорта',
      values: [
        {
          color: '#D698B9',
          title: 'Видовый балкон'
        },
        {
          color: '#AB93C9',
          title: 'Декоративный камин'
        },
        {
          color: '#FFBEA3',
          title: 'Трансфер от/до аэропорта'
        },
        {
          color: '#FAE3D9',
          title: 'Кухня с обеденной зоной'
        },
        {
          color: '#BBDED6',
          title: 'Детские принадлежности'
        },
        {
          color: '#8AC6D1',
          title: 'Просторная гостиная'
        }
      ]
    },
    {
      name: 'toggle_list',
      title: 'Спецпредложения',
      description: 'Скидки и специальные предложения для наших гостей от Ginza Hotels&Apartments.',
      values: [
        {
          id: 1,
          title: '20% на меню ресторанов Gizna',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 2,
          title: 'от 10% при бронирование за сутки и более',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        },
        {
          id: 3,
          title: 'от 15% для держателей карт Ginza',
          text: 'Это самые удобные кровати, на которых мне доводилось спать. Ты ложишься и тебя словно обнимает мягкое удобное облако. Просто какое-то волшебство. Хочется вернуться, и еще раз испытать эти ощущения.'
        }
      ]
    },
    {
      name: 'breadcrumbs',
      values: [
        {
          url: '/',
          linkLabel: 'Апарт'
        },
        {
          url: '/about',
          linkLabel: 'О нас'
        }
      ]
    }
  ]
}
