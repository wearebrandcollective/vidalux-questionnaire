const quizQuestions = [
  // {
  //   question: 'Do you currently use CBD products?',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Neutral',
  //       content: 'Yes',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'No',
  //       questionImage: 'none'
  //     }
  //   ]
  // },
  // {
  //   question: 'When it comes to CBD, are you:',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Neutral',
  //       content: 'Informed',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'Open-minded',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'Uncertain',
  //       questionImage: 'none'
  //     }
  //   ]
  // },
  // {
  //   question: 'Are you looking for a product that helps with:',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'Energy and Focus',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaLightning.png'
  //     },
  //     {
  //       type: 'PREDETERMINEDANSWER',
  //       content: 'Sleep Cycle',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaZzMoon.png'
  //     },
  //     {
  //       type: 'Premium_Package_3_products_curcumin_500mg_tincture_melatonin',
  //       content: 'Anxiety or Stress',
  //       questionImage: 'http://vidalux.com/wp-content/uploads/2019/05/qaWow.png'
  //     },
  //     {
  //       type: 'Premium_Package_3_products_curcumin_500mg_tincture_melatonin',
  //       content: 'Inflammation',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaNoSee.png'
  //     },
  //     {
  //       type: 'Premium_Package_3_products_curcumin_500mg_tincture_melatonin',
  //       content: 'General Wellness',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaSmile.png'
  //     },
  //     {
  //       type: 'Premium_Package_3_products_curcumin_500mg_tincture_melatonin',
  //       content: 'All Apply',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaWaves.png'
  //     }
  //   ]
  // },
  // {
  //   question: 'Do you take supplements?',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Neutral',
  //       content: 'Daily',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'From Time to Time',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'No',
  //       questionImage: 'none'
  //     }
  //   ]
  // },
  // {
  //   question: 'When it comes to taking supplements, would you rather:',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'Softgels',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaSoftgels.png'
  //     },
  //     {
  //       type: '_250mg_Tincture_500mg_Tincture',
  //       content: 'Drops',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaTinctures.png'
  //     },
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'Both',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaBoth.png'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'No Preference',
  //       questionImage:
  //         'http://vidalux.com/wp-content/uploads/2019/05/qaWaves.png'
  //     }
  //   ]
  // },

  // {
  //   question: 'Do you prefer to be precise with your dose?',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'Yes',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: '_250mg_Tincture_500mg_Tincture',
  //       content: 'No',
  //       questionImage: 'none'
  //     }
  //   ]
  // },

  // {
  //   question: 'Are you vegan?',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: '_250mg_Tincture_500mg_Tincture',
  //       content: 'Yes',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'No',
  //       questionImage: 'none'
  //     }
  //   ]
  // },

  // {
  //   question: 'Would you prefer rapid or extended release?',
  //   animation: 'qLoading',
  //   answers: [
  //     {
  //       type: '_250mg_Tincture_500mg_Tincture',
  //       content: 'Rapid',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
  //       content: 'Extended',
  //       questionImage: 'none'
  //     },
  //     {
  //       type: 'Neutral',
  //       content: 'No Preference',
  //       questionImage: 'none'
  //     }
  //   ]
  // },
  {
    question: 'How did you hear about us?',
    animation: 'qLoading',
    answers: [
      {
        type: 'Neutral',
        content: 'Social Media',
        questionImage:
          'http://vidalux.com/wp-content/uploads/2019/05/qaPhone.png'
      },
      {
        type: 'Neutral',
        content: 'Online Search',
        questionImage:
          'http://vidalux.com/wp-content/uploads/2019/05/qaDesktop.png'
      },
      {
        type: 'Neutral',
        content: 'Word of Mouth',
        questionImage:
          'http://vidalux.com/wp-content/uploads/2019/05/qaChat.png'
      },
      {
        type: 'Jackpot',
        content: 'Other',
        questionImage:
          'http://vidalux.com/wp-content/uploads/2019/05/qaWaves.png'
      }
    ]
  }
];

export default quizQuestions;
