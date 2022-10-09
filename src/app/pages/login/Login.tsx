import { useState } from "react"

export function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleSubmit() {

  // }
  return(
    <div>
      <form>
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <button type="button">Entrar</button>
      </form>
    </div>
  )
}