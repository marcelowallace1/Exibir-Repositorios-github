import {useEffect, useState} from 'react';
import * as S from './styled';
import {useNavigate} from 'react-router-dom';


export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    const navigate = useNavigate();
    //busca os repos e  armazena em reponame
    useEffect(() =>{
        
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName != null ){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
        } else {
            navigate('/')
        }


        //limpar os arquivos armazenados
       // localStorage.clear();
    }, []);
    //retorno da lista dos reps
    return(
        <S.Container>
            <S.Title> Repositorios </S.Title>
            <S.List>
            {repositories.map(repository =>{
                return(
                <S.ListItem> Repositório: { repository }</S.ListItem>
                )
            })}
            </S.List>
            <S.LinkHome to='/'> Voltar</ S.LinkHome>
        </S.Container>
    )
}

