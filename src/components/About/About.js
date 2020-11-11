import React from 'react';
import styles from './About.module.css';
import Loader from '../Loader/Loader.gif';
import CardContent from '@material-ui/core/CardContent';
import { Octokit } from '@octokit/rest';

let octokit = new Octokit();

class About extends React.Component {
  state = {
    userName: '',
    avatarUrl: '',
    isLoading: true,
    repoList: [],
    errorLoading: false,
    errorText: ''
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'EvelinaEfimova'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
    })

    .catch(error => (this.setState({
      isLoading: false,
      errorLoading: true,
      errorText: error.name
    })));

    octokit.users.getByUsername({
      username: 'EvelinaEfimova'
    }).then((user) => {
      this.setState({
        userName: user.data.login,
        avatarUrl: user.data.avatar_url,
      })
    })
  }

  render() {
    const { isLoading, repoList, errorLoading, errorText, userName, avatarUrl } = this.state;

    return(
      <CardContent className={styles.container}>
         <h1>
           { isLoading ? <img src={ Loader } alt='Loading...' /> : 'About' }
         </h1>

         { !isLoading &&
          <div className={styles.container}>
             {errorLoading ? <p>Error: { errorText } </p> : 
               <div>
                 <div>
                  <p>Пользователь: { userName }</p>
                  <img src={avatarUrl} alt='picture' className={styles.picture} /> 
                 </div>

                 <h2>
                  My repositories
                 </h2>
                 <ol>
                   {repoList.map(repo => (
                     <li key = { repo.id }>
                     <a href={ repo.html_url } className={styles.link}>{ repo.name }</a>
                     </li>
                   ))}
                 </ol>
               </div>  
             }
          </div>
         }
      </CardContent>
    ) 
  }
}

export default About;
