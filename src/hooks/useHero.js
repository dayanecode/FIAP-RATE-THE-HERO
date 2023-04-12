import useAxios from "axios-hooks";

export function useHero (heroId) {
const [{ data: hero, loading: isLoadingHero }, getHero ] = useAxios (
    `/${heroId}`,
	{
        manual: heroId == null,
    }
    );

    //Vai setar um item no local storage e vai obter todas as informações
    function setHeroAvaliation(hero) {
        localStorage.setItem(hero.id,JSON.stringify(hero));
    }
    
    //Vai fazer um JSON.parse para pegar a inforamação e retornar para nós
    function getHeroAvaliation(heroId) {
        return JSON.parse(localStorage.getItem(heroId));
    }

    return {
        hero,
        isLoadingHero,
        getHero,
        setHeroAvaliation,
        getHeroAvaliation,
    };

}