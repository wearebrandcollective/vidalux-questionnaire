import React, { Component } from 'react';
// import FadeIn from 'react-fade-in';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
// import Buy from './components/Buy';
import Result from './components/Result';
// import { Button, InputGroup, FormControl } from 'react-bootstrap';

// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import { reset, themes, List, ListItem, Divider } from 'react95';
// import { reset } from 'react95';

import './App.css';
// import VidaluxLogoDark from './svg/VidaluxLogoDark.svg';
import arrow from '../src/svg/arrow.svg';
import arrowBack from '../src/svg/arrowBack.svg';

// import BeginBtn from './components/BeginBtn';
import Header from './components/Header';
import Header2 from './components/Header2';
// import Test from './components/Test';
import BeginQuestions from './components/BeginQuestions';
import Modal from 'react-modal';

import 'bootstrap/dist/css/bootstrap.css';

// import 'bulma/css/bulma.css';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';

// -=-=-=-=-=-=-=-=-=-= REACT95
// const ResetStyles = createGlobalStyle`
//   ${reset}
// `;
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 1
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
    background: '#4A403D',
    color: 'white',
    border: 'none'
  }
};
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 2
const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
    background: '#4A403D',
    color: 'white',
    border: 'none'
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      animation: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Neutral: 99,
        Jackpot: 0,
        PCR_Hemp_Oil_Curcumin_Softgels: 0,
        PCR_Hemp_Oil_Melatonin_Softgels: 0,
        PCR_Hemp_Oil_Softgels: 0,
        _250mg_Tincture_500mg_Tincture: 0,
        Standard_Package_3_products_softgels_250mg_tincture_melatonin: 0,
        Premium_Package_3_products_curcumin_500mg_tincture_melatonin: 1,
        PREDETERMINEDANSWER: 0
      },
      result: '',
      emptyBeginBtnState: true,
      nonEmptyBeginBtnState: false,
      inputName: '',
      inputAge: '',
      inputGender: '',
      inputUSState: '',
      inputEmail: '',
      inputOther: '',
      expandOnOtherSelect: '',
      test: [],
      modalIsOpen: false,
      modalIsOpen2: false,
      enterCardDetails: false
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 1
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 2
    this.openModal2 = this.openModal2.bind(this);
    this.afterOpenModal2 = this.afterOpenModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.enterCardDetailsClick = this.enterCardDetailsClick.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      animation: quizQuestions[0].animation,
      answerOptions: shuffledAnswerOptions[0]
    });
    console.log(
      '%c%s',
      'color:red; background:blue; font-size: 20pt',
      'No bugs here LOL ;)'
    );
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const io = [];
    io.push(this.state.question, answer);
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer,
      test: [...state.test, io]
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      animation: quizQuestions[counter].animation,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    // find second largest number
    const findSecondLargeNumber = arr => {
      let fLargeNum = 0;
      let sLargeNum = 0;

      for (let i = 0; i < arr.length; i++) {
        if (fLargeNum < arr[i]) {
          sLargeNum = fLargeNum;
          fLargeNum = arr[i];
        } else if (sLargeNum < arr[i]) {
          sLargeNum = arr[i];
        }
      }

      return sLargeNum;
    };

    // sets answerCount to state of the answer count answerCount{CbdPackage2: 1, Nitendo: 2, CbdPackageOfFirst3: 3}
    const answersCount = this.state.answersCount;

    // returns the keys of the asnwerCount obj [CbdPackage2, Nitendo, CbdPackageOfFirst3]
    const answersCountKeys = Object.keys(answersCount);

    // loops thrue answerCountKeys[CbdPackage2, Nitendo, CbdPackageOfFirst3] for each key returns [ 5, 2, 2 ]
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);

    // returns biggest number from answersCountValues([5, 2, 2]) === [5]
    // const maxAnswerCount = Math.max.apply(null, answersCountValues);

    // returns second biggest number
    const maxAnswerCount = findSecondLargeNumber(answersCountValues);

    // finaly returns filters thrue[CbdPackage2, Nitendo, CbdPackageOfFirst3]  and returns a KEY that matched maxAnswerCount([5])
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (this.state.answersCount.PREDETERMINEDANSWER === 1) {
      this.setState({
        result: 'PREDETERMINEDANSWER',
        // result: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
        modalIsOpen: true,
        modalIsOpen2: true
      });
    } else if (result.length === 1) {
      this.setState({
        result: result[0],
        modalIsOpen: true,
        modalIsOpen2: true
      });
      const segment = `name: ${this.state.inputName} age: ${
        this.state.inputAge
      } gender: ${this.state.inputGender} state: ${
        this.state.inputUSState
      } email: ${this.state.inputEmail}`;
      window.analytics.track(segment);
    } else {
      this.setState({
        result: 'Standard_Package_3_products_softgels_250mg_tincture_melatonin',
        modalIsOpen: true,
        modalIsOpen2: true
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        animation={this.state.animation}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 1
  renderResult() {
    return (
      <div>
        <Result
          quizResult={this.state.result}
          enterCardDetails={this.state.enterCardDetails}
          enterCardDetailsClick={this.enterCardDetailsClick}
          openModal={this.openModal}
          openModal2={this.openModal2}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          <Header2 />
          {/* <div className='text-center'>
            <img
              src={logo}
              ref={subtitle => (this.subtitle = subtitle)}
              alt=''
            />
          </div> */}
          <h4
            ref={subtitle => (this.subtitle = subtitle)}
            className='text-center congratulations marginTop200'
          >
            Congrats! You've taken the first step into your wellness journey.
          </h4>
          <h6 className='text-center enterYourEmail mt-5'>
            Enter your email to get your results and receive a 10% discount on
            your order.
          </h6>

          {/* <div className='input-group input-group-lg mb-3 correctWidthOfTheButton2 mt-5'>
            <input
              type='email'
              className='form-control noBorderForMyInput correctHeightForTheInputs widerEmailInput'
              placeholder=''
              onChange={this.handleChange5}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = '')}
            />
            <div className='input-group-append '>
              <button
                className='btn  bg-white noBorderForMyInput'
                type='button'
                onClick={this.closeModal}
                disabled={!this.state.inputEmail}
              >
                <img src={arrow} alt='>' />
              </button>
            </div>
          </div> */}
          <form
            action='https://formkeep.com/f/606c5e2b4c66'
            target='_blank'
            acceptCharset='UTF-8'
            encType='multipart/form-data'
            method='POST'
            onSubmit={this.closeModal}
          >
            <div className='input-group input-group-lg mb-3 correctWidthOfTheButton2 mt-5'>
              <input type='hidden' name='utf8' value='✓' />

              <input
                className='form-control noBorderForMyInput correctHeightForTheInputs widerEmailInput'
                type='email'
                id='email-address'
                name='email'
                onChange={this.handleChange5}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = '')}
              />
              <div className='input-group-append '>
                <button
                  type='submit'
                  className='btn bg-white noBorderForMyInput'
                  disabled={!this.state.inputEmail}
                >
                  TODO:
                  <img src={arrow} alt='>' />
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }

  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= modal 2
  renderResult2() {
    return (
      <div>
        <Result
          quizResult={this.state.result}
          enterCardDetails={this.state.enterCardDetails}
          enterCardDetailsClick={this.enterCardDetailsClick}
          openModal={this.openModal}
          openModal2={this.openModal2}
        />

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          <Header2 />
          {/* <div className='text-center'>
            <img
              src={logo}
              ref={subtitle => (this.subtitle = subtitle)}
              alt=''
            />
          </div> */}
          <h4
            ref={subtitle => (this.subtitle = subtitle)}
            className='text-center congratulations marginTop200'
          >
            Congrats! You've taken the first step into your wellness journey.
          </h4>
          <h6 className='text-center enterYourEmail mt-5'>
            Enter your email to get your results and receive a 10% discount on
            your order.
          </h6>

          {/* <div className='input-group input-group-lg mb-3 correctWidthOfTheButton2 mt-5'>
            <input
              type='email'
              className='form-control noBorderForMyInput correctHeightForTheInputs widerEmailInput'
              placeholder=''
              onChange={this.handleChange5}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = '')}
            />
            <div className='input-group-append '>
              <button
                className='btn bg-white noBorderForMyInput'
                type='button'
                onClick={this.closeModal}
                disabled={!this.state.inputEmail}
              >
                <img src={arrow} alt='>' />
              </button>
            </div>
          </div> */}
          <form
            action='https://formkeep.com/f/606c5e2b4c66'
            target='_blank'
            acceptCharset='UTF-8'
            encType='multipart/form-data'
            method='POST'
            onSubmit={this.closeModal}
          >
            <div className='input-group input-group-lg mb-3 correctWidthOfTheButton2 mt-5'>
              <input type='hidden' name='utf8' value='✓' />

              <input
                className='form-control noBorderForMyInput correctHeightForTheInputs widerEmailInput'
                type='email'
                id='email-address'
                name='email'
                onChange={this.handleChange5}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = '')}
              />
              <div className='input-group-append '>
                <button
                  type='submit'
                  className='btn bg-white noBorderForMyInput'
                  disabled={!this.state.inputEmail}
                >
                  TODO:
                  <img src={arrow} alt='>' />
                </button>
              </div>
            </div>
          </form>
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpen2}
          onAfterOpen={this.afterOpenModal2}
          onRequestClose={this.closeModal2}
          style={customStyles2}
          contentLabel='Example Modal'
          ariaHideApp={false}
        >
          <Header2 />
          {/* <div className='text-center'>
            <img
              src={logo}
              ref={subtitle => (this.subtitle = subtitle)}
              alt=''
            />
          </div> */}
          <h4
            ref={subtitle => (this.subtitle = subtitle)}
            className='text-center congratulations marginTop200'
          >
            You answered other in the last question, how did you hear about us?
          </h4>
          {/* <h6 className='text-center enterYourEmail mt-5'>
            Enter your email to get your results and geta 10% discount on your
            order.
          </h6> */}

          <div className='input-group input-group-lg mb-3 correctWidthOfTheButton mt-5'>
            <input
              type='email'
              className='form-control noBorderForMyInput correctHeightForTheInputs'
              placeholder=''
              onChange={this.handleChange6}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = '')}
            />
            <div className='input-group-append '>
              <button
                className='btn  bg-white noBorderForMyInput'
                type='button'
                onClick={this.closeModal2}
                disabled={!this.state.inputOther}
              >
                <img src={arrow} alt='>' />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  startOver() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      animation: quizQuestions[0].animation,
      answerOptions: shuffledAnswerOptions[0],
      counter: 0,
      questionId: 1,
      answer: '',
      answersCount: {
        PCR_Hemp_Oil_Curcumin_Softgels: 0,
        PCR_Hemp_Oil_Melatonin_Softgels: 0,
        PCR_Hemp_Oil_Softgels: 0,
        _250mg_Tincture_500mg_Tincture: 0,
        Standard_Package_3_products_softgels_250mg_tincture_melatonin: 0,
        Premium_Package_3_products_curcumin_500mg_tincture_melatonin: 1,
        Neutral: 99,
        PREDETERMINEDANSWER: 0,
        Jackpot: 0
      },
      result: '',
      emptyBeginBtnState: true,
      nonEmptyBeginBtnState: false,
      inputName: '',
      inputAge: '',
      inputGender: '',
      inputUSState: '',
      inputEmail: '',
      inputOther: '',
      expandOnOtherSelect: '',
      test: [],
      modalIsOpen: false,
      modalIsOpen2: false,
      enterCardDetails: false
    });
  }

  triggerBeginBtn = () => {
    this.setState({
      ...this.state,
      emptyBeginBtnState: false,
      nonEmptyBeginBtnState: true
    });
  };

  handleChange(event) {
    this.setState({
      inputName: event.target.value
    });
  }
  handleChange2(event) {
    this.setState({
      inputAge: event.target.value
    });
  }
  handleChange3(event) {
    this.setState({
      inputGender: event.target.value
    });
  }
  handleChange4(event) {
    this.setState({
      inputUSState: event.target.value
    });
  }
  handleChange5(event) {
    this.setState({
      inputEmail: event.target.value
    });
  }
  handleChange6(event) {
    this.setState({
      // expandOnOtherSelect: event.target.value,
      inputOther: event.target.value
    });
  }
  handleMaleSelect = () => {
    this.setState({
      inputGender: 'Male'
    });
  };
  handleFemaleSelect = () => {
    this.setState({
      inputGender: 'Female'
    });
  };
  handleNonBinarySelect = () => {
    this.setState({
      inputGender: 'Non-Binary'
    });
  };

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  closeModal() {
    setTimeout(
      function() {
        this.setState({ modalIsOpen: false });
      }.bind(this),
      0
    );
    // this.setState({ modalIsOpen: false });
    // const segment = `name: ${this.state.inputName} age: ${
    //   this.state.inputAge
    // } gender: ${this.state.inputGender} state: ${
    //   this.state.inputUSState
    // } other: ${this.state.inputOther} email: ${this.state.inputEmail}`;
    // window.analytics.track(segment);
  }

  openModal2() {
    this.setState({ modalIsOpen2: true });
  }

  afterOpenModal2() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'white';
  }

  closeModal2() {
    this.setState({ modalIsOpen2: false });
  }

  enterCardDetailsClick() {
    // this.setState({ enterCardDetails: true });
    window.location.replace('https://www.vidalux.com/');
  }

  render() {
    return (
      <div className='App'>
        <Header startOver={this.startOver} />
        {this.state.emptyBeginBtnState && (
          <BeginQuestions
            onTriggerBeginBtn={this.triggerBeginBtn}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleChange2={this.handleChange2}
            handleChange3={this.handleChange3}
            handleChange4={this.handleChange4}
            handleMaleSelect={this.handleMaleSelect}
            handleFemaleSelect={this.handleFemaleSelect}
            handleNonBinarySelect={this.handleNonBinarySelect}
            inputName={this.state.inputName}
            inputAge={this.state.inputAge}
            inputUSState={this.state.inputUSState}
          />
        )}
        {this.state.nonEmptyBeginBtnState && (
          /* -=-=-=-=-=-=-=-=-=-= START OVER BTN BEGIN */

          /* <div>
            <div className='text-center mt-4 mb-4'>
              <button
                onClick={() => this.startOver()}
                type='button'
                className='btn btn-info'
              >
                Start Over
              </button>
            </div>
          </div> */

          <div className='text-center backBtnPosition mt-5 sob'>
            <div onClick={() => this.startOver()}>
              <img src={arrowBack} alt='<' />
              <button type='button' className='btn backBtn'>
                START OVER
              </button>
            </div>
          </div>
        )

        /* -=-=-=-=-=-=-=-=-=-= START OVER BTN END */
        }
        <div
          style={{
            display: this.state.nonEmptyBeginBtnState ? 'block' : 'none'
          }}
        >
          {this.state.result || this.state.emptyBeginBtnState
            ? this.state.answersCount.Jackpot === 1
              ? this.renderResult2()
              : this.renderResult()
            : this.renderQuiz()}
        </div>
        {/* <div className='datato'>
          <ResetStyles />
          <ThemeProvider theme={themes.default}>
            <List>
              <ListItem>:segment</ListItem>
              <button onClick={this.openModal}>Open Modal</button>
              <button onClick={this.openModal2}>Open Modal2</button>
              <li>{JSON.stringify(this.state.inputName)}</li>
              <li>{JSON.stringify(this.state.inputAge)}</li>
              <li>{JSON.stringify(this.state.inputGender)}</li>
              <li>{JSON.stringify(this.state.inputUSState)}</li>
              <li>{JSON.stringify(this.state.inputEmail)}</li>
              <li>{JSON.stringify(this.state.inputOther)}</li>
              <Divider />
              <li className='TODELETE'>{JSON.stringify(this.state.test)}</li>
            </List>
          </ThemeProvider>
        </div> */}
      </div>
    );
  }
}

export default App;
