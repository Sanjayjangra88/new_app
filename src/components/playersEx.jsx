import React, { Component } from "react";

class PlayersEx extends Component{
    state = {
        players:[
        {name:"williom", answers:10, correct: 8},
        {name:"goerge", answers:8, correct: 7},
        {name:"kathline", answers:12, correct: 9},
        {name:"shopia", answers:11, correct: 10},
        {name:"tommy", answers:9, correct: 6},
        {name:"Harry", answers:13, correct: 8},
    ],
    CorrectScore : 2,
    IncorrectScore : -1,
    };
    sortPlayers = (p1,p2) => {
        const {CorrectScore,IncorrectScore} = this.state;
        let x1= 
        p1.correct*CorrectScore + (p1.answers-p1.correct)*IncorrectScore;
        let x2= 
        p2.correct*CorrectScore + (p2.answers-p2.correct)*IncorrectScore;
        return x2-x1;

    }
    totalQsn = () =>{
        const {players} = this.state;
        return players.reduce((acc,curr) => acc+curr.answers,0);
    };
    totalCorrect = () =>{
        const {players} = this.state;
        return players.reduce((acc,curr) => acc+curr.correct,0);
    };
    render () {
    const {players,CorrectScore,IncorrectScore} = this.state;
    const player1=[...players];
    let totalQstnAsked = this.totalQsn();
    let totalCorrectAns = this.totalCorrect();
    player1.sort(this.sortPlayers);
        return (
            <div className="container">
            <div className="row bg-success text-white">
            <div className="col-3 border">Name</div>
            <div className="col-3 border text-center">Answers</div>
            <div className="col-3 border text-center">correct</div>
            <div className="col-3 border text-center">Score</div>
            </div>
           { players.map(p1=> {
            let {name,answers,correct} =p1;
            return (
                <div className="row">
                <div className="col-3 border ">{name}</div>
                <div className="col-3 border text-center">{answers}</div>
                <div className="col-3 border text-center">{correct}</div>
                <div className="col-3 border text-center">
                    {correct*CorrectScore + (answers-correct)*IncorrectScore}
                    </div>
                </div>
                   );
                   })}
                   <div className=" row bg-light">
                   <div className=" col-6 border">
                       <h4>Leader Bord</h4>
                       1.{player1[0].name}
                       <br/>
                       2.{player1[1].name}
                       <br/>
                       3.{player1[2].name}
                       <br/>

                   </div>
                       
                   </div>
                   <div className="col-6 border">
                       <h4>Statics</h4>
                       Total Question:{totalQstnAsked}<br/>
                       Correct Question:{totalCorrectAns}<br/>
                       Incorrect Answere: {totalQstnAsked-totalCorrectAns}<br/>
                       
                   </div>
               </div>
        );
    
}
    
}
export default PlayersEx;