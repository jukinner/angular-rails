import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list'
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://justinkinner.com', 'Ruby on Rails', 150, 120, 15, 'Jukinner@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'ABCXY Company', 'http://justinkinner.com', 'Ruby on Rails', 150, 120, 15, 'Jukinner@gmail.com')
  proposalThree: Proposal = new Proposal(30, 'Something Company', 'http://justinkinner.com', 'Ruby on Rails', 150, 120, 15, 'Jukinner@gmail.com')


  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
    ]
}






