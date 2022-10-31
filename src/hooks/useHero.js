import useAxios from "axios-hooks";

export function useHero (heroId) {
const [{ data: hero, loading: isLoadingHero }, getHero ] = useAxios (
    `/${heroId}`,
	{
        manual: heroId == null,
    }
    );

    function setHeroAvaliation(hero) {
        localStorage.setItem(hero.id,JSON.stringify(hero));
    }
    
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