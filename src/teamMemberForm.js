import React from 'react'

export default function TeamMemberForm(props) {
    //setup props & bunch of other stuff
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            <label htmlFor='name'>Name
                <input
                  id='name'
                  type='text'
                  name='name'
                  onChange={onChange}
                  value={values.name}
                />
            </label>
    
            <label htmlFor='email'>Email
              <input
                id='email'
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
              />
            </label>
    
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            <label htmlFor='role'>Role
              {/* 🔥 STEP 5 - Make dropdown for role. */}
              <select id='role' name='role' onChange={onChange} value={values.role}>
                <option value=''>-- Select a Role --</option>
                <option value='Hodler'>Hodler</option>
                <option value='Trader'>Trader</option>
                <option value='Larper'>Larper</option>
                <option value='Influencer'>Influencer</option>
              </select>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
      )

}