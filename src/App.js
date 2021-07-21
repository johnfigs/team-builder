import React, { useState } from 'react';

import TeamMemberForm from './teamMemberForm';
import TeamMember from './TeamMember';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
      const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (newTeamMember.name && newTeamMember.email && newTeamMember.role){ 
      setTeamMembers([newTeamMember, ...teamMembers])
      setFormValues(initialFormValues)
    }
    else{
      alert("Please fill out the form completely");
    }

  }

  return (
    <div className='container'>
    <h1>Form App</h1>
    <TeamMemberForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />

    {
      teamMembers.map(member=> {
        return (
          <TeamMember details={member} />
        )
      })
    }
    </div>
  );
}

export default App;
