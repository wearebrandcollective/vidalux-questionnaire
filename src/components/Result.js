import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import arrowBack from '../svg/arrowBack.svg';

import Buy from './Buy';

import PCRHempOilCurcuminSoftgels from '../images/results/PCRHempOilCurcuminSoftgels.jpg';
import PCRHempOilTincture500mg from '../images/results/PCRHempOilTincture500mg.jpg';
import PCRHempOilSoftgels from '../images/results/PCRHempOilSoftgels.jpg';
import PCR250 from '../images/results/PCR250.jpg';
import melatonin from '../images/results/melatonin.jpg';

const Result = props => {
  return (
    <CSSTransitionGroup
      className='container result bgf'
      component='div'
      transitionName='fade'
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      {props.enterCardDetails === false ? (
        (() => {
          switch (props.quizResult) {
            case 'Premium_Package_3_products_curcumin_500mg_tincture_melatonin':
              return (
                // PREMIUM PACKAGE
                <div>
                  <h4 className='text-center questionHeading mobileVerticalIntroQuestions'>
                    Made just for you
                  </h4>
                  <div
                    className='container bgf beforeBuy'
                    onClick={props.enterCardDetailsClick}
                  >
                    <div className='row'>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilCurcuminSoftgels}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Curcumin Softgels
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilTincture500mg}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          500mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={melatonin}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Melatonin Softgels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center backBtnPosition2 mt-5'
                    onClick={props.openModal}
                  >
                    <img src={arrowBack} alt='<' />
                    <button type='button' className='btn backBtn'>
                      BACK
                    </button>
                  </div>
                </div>
              );

            case 'Standard_Package_3_products_softgels_250mg_tincture_melatonin':
              return (
                // STANDART PACKAGE
                <div>
                  <h4 className='text-center questionHeading mobileVerticalIntroQuestions'>
                    Made just for you
                  </h4>
                  <div
                    className='container bgf beforeBuy'
                    onClick={props.enterCardDetailsClick}
                  >
                    <div className='row'>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilSoftgels}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Softgels
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCR250}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          250mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={melatonin}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Melatonin Softgels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center backBtnPosition2 mt-5'
                    onClick={props.openModal}
                  >
                    <img src={arrowBack} alt='<' />
                    <button type='button' className='btn backBtn'>
                      BACK
                    </button>
                  </div>
                </div>
              );

            case '_250mg_Tincture_500mg_Tincture':
              // 250 and 500 package
              return (
                <div>
                  <h4 className='text-center questionHeading mobileVerticalIntroQuestions'>
                    Made just for you
                  </h4>
                  <div
                    className='container bgf beforeBuy'
                    onClick={props.enterCardDetailsClick}
                  >
                    <div className='row'>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCR250}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          250mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilTincture500mg}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          500mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center backBtnPosition2 mt-5'
                    onClick={props.openModal}
                  >
                    <img src={arrowBack} alt='<' />
                    <button type='button' className='btn backBtn'>
                      BACK
                    </button>
                  </div>
                </div>
              );

            case 'PREDETERMINEDANSWER':
              // PREDETERMINED STANDART PACKAGE
              return (
                <div>
                  <h4 className='text-center questionHeading mobileVerticalIntroQuestions'>
                    Made just for you
                  </h4>
                  <div
                    className='container bgf beforeBuy'
                    onClick={props.enterCardDetailsClick}
                  >
                    <div className='row'>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilSoftgels}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Softgels
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCR250}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          250mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={melatonin}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Melatonin Softgels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center backBtnPosition2 mt-5'
                    onClick={props.openModal}
                  >
                    <img src={arrowBack} alt='<' />
                    <button type='button' className='btn backBtn'>
                      BACK
                    </button>
                  </div>
                </div>
              );
            default:
              // AS A DEFAULT STANDART PACKAGE
              return (
                <div>
                  <h4 className='text-center questionHeading mobileVerticalIntroQuestions'>
                    Made just for you
                  </h4>
                  <div
                    className='container bgf beforeBuy'
                    onClick={props.enterCardDetailsClick}
                  >
                    <div className='row'>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCRHempOilSoftgels}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Softgels
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={PCR250}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          250mg PCR Hemp Oil Tincture
                        </p>
                      </div>
                      <div className='col text-center'>
                        <img
                          className='resizingSomeProduct'
                          src={melatonin}
                          alt=''
                        />
                        <p className=' mt-5 resultHeading'>
                          PCR Hemp Oil Melatonin Softgels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='text-center backBtnPosition2 mt-5'
                    onClick={props.openModal}
                  >
                    <img src={arrowBack} alt='<' />
                    <button type='button' className='btn backBtn'>
                      BACK
                    </button>
                  </div>
                </div>
              );
          }
        })()
      ) : (
        <Buy />
      )}
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
