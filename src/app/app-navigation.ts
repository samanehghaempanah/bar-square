export const navigation = [
  {
    text: 'داشبورد',
    path: '/',
    icon: 'home',
  },
  {
    text: 'اطلاعات پایه',
    path: '',
    icon: 'rename',
    items: [
      {
        text: 'اجناس',
        // path: 'basic/goods',
        items: [
          {
            text: 'طراحی اول (فرم)',
            path: 'basic/goods/1',
          },
          {
            text: 'طراحی دوم (گرید)',
            path: 'basic/goods/2',
          },
          {
            text: 'طراحی سوم (پاپ آپ)',
            path: 'basic/goods/3',
          }
        ],
      },
      {
        text: 'حساب بانکی',
        // path: '',
      },
      {
        text: 'اشخاص',
        // path: '',
        items: [
          {
            text: 'دسته بندی اشخاص',
            // path: '',
          },
        ],
      },
      {
        text: 'کاربران',
        // path: '',
      },
      {
        text: 'گروه های کاربری',
        // path: '',
      },
      {
        text: 'دسترسی ها',
        // path: '',
      },
    ],
  },
  {
    text: 'خرید',
    icon: 'cart',
    items: [
      {
        text: 'خرید (بارنامه): شراکت، امانی، خریداری',
        // path: '',
      },
    ],
  },
  {
    text: 'فروش',
    icon: 'datatrending',
    items: [
      {
        text: 'پای باسکول',
        // path: '',
      },
      {
        text: 'فروش روزانه',
        // path: '',
      },
      {
        text: 'فاکتور فروش (فروش تک قلم)',
        // path: '',
      },
    ],
  },
  {
    text: 'دریافت و پرداخت',
    icon: 'money',
    items: [
      {
        text: 'ثبت پرداختی ها',
        // path: '',
      },
      {
        text: 'ثبت دریافتی ها',
        // path: '',
      },
      {
        text: 'انتقال بین حساب ها',
        // path: '',
      },
      {
        text: 'انتقال بین اشخاص',
        // path: '',
      },
    ],
  },
  {
    text: 'عملیات  چک ها',
    icon: 'taskcomplete',
    items: [
      {
        text: 'واگذاری چک به حساب',
        // path: '',
      },
      {
        text: 'وصولی چک',
        // path: '',
      },
      {
        text: 'برگشت چک',
        // path: '',
      },
      {
        text: 'خرج چک',
        // path: '',
      },
    ],
  },
  {
    text: 'گزارشات',
    icon: 'textdocument',
  }
];
