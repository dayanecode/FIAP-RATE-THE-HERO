import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../shared/DesignTokens';
import {
	SelectField,
	Option,
} from '../common-components/SelectField/SelectField';
import { Button } from '../common-components/Button/Button';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { Description } from '../common-components/Description/Description';
import { Card } from '../common-components/Card/Card';
import { Caption } from '../common-components/Caption/Caption';
import { useNavigate, useParams } from 'react-router-dom';
import { useHero } from '../hooks/useHero';
const Container = styled.aside`
	width: 727px;
	margin: 0 auto;
`;
const HeroAvatar = styled.div`
	width: 344px;
	height: 194px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center 25%;
`;
const DetailsGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: ${Spaces.TWO};
`;
export function Details() {
	const navigate = useNavigate();
    const { id } = useParams();
    const { hero, isLoadingHero } = useHero(id);
	// const handleBack = () => {
	// 	navigate.goBack();
	// };

	return (
        !isLoadingHero && (
		<Container>
			<Flex mt={Spaces.FOUR} as="section">
				<HeroAvatar src={hero.image.url}/>
				<Flex
					flexDirection="column"
					justifyContent="center"
					height={194}
					ml={Spaces.SEVEN}
				>
					<Flex>
						<SelectField name='avaliation' required>
							<Option value="" selected disabled>
								Selecione a nota
							</Option>
							<Option>5</Option>
							<Option>4</Option>
							<Option>3</Option>
							<Option>2</Option>
							<Option>1</Option>
						</SelectField>
						<Box ml={Spaces.THREE}>
							<Button type='submit'>Atribuir</Button>
						</Box>
					</Flex>
				</Flex>
			</Flex>
			<Box my={Spaces.ONE_HALF} as="section">
				<HeadingTwo as="h1">{hero.name}</HeadingTwo>
				<Description color={Colors.GRAY_700}>
					{hero.biography['full-name']} - {hero.biography.publisher}
				</Description>
			</Box>
			<DetailsGrid>
				<Card>
					<Box p={Spaces.TWO}>
						<Box mb={Spaces.ONE}>
							<Caption>Codinomes</Caption>
						</Box>
						<Description color={Colors.GRAY_700}>
							{hero.biography.aliases.join(', ')}
						</Description>
					</Box>
				</Card>
				<Card>
					<Box p={Spaces.TWO}>
						<Box mb={Spaces.ONE}>
							<Caption>Local de Nascimento</Caption>
						</Box>
						<Description color={Colors.GRAY_700}>
							Brooklyn - NY
						</Description>
					</Box>
				</Card>
				<Card>
					<Box p={Spaces.TWO}>
						<Box mb={Spaces.ONE}>
							<Caption>Primeira HQ</Caption>
						</Box>
						<Description color={Colors.GRAY_700}>
							Captain America Comics #1
						</Description>
					</Box>
				</Card>
				<Card>
					<Box p={Spaces.TWO}>
						<Box mb={Spaces.ONE}>
							<Caption>Informações Biológicas</Caption>
						</Box>
						<Description color={Colors.GRAY_700}>
							<strong>Genero: </strong> Masculino
							<br />
							<strong>Raça: </strong> Humano
							<br />
							<strong>Altura: </strong> 1,88 m
							<br />
							<strong>Peso: </strong> 95 kg
							<br />
							<strong>Cor do olho: </strong> Azul
							<br />
							<strong>Cor do cabelo: </strong> Loiro
						</Description>
					</Box>
				</Card>
				<Card>
					<Box p={Spaces.TWO}>
						<Box mb={Spaces.ONE}>
							<Caption>Atributos</Caption>
						</Box>
						<Description color={Colors.GRAY_700}>
							<strong>Força: </strong> 100
							<br />
							<strong>Inteligência: </strong> 100
							<br />
							<strong>Velocidade: </strong> 100
							<br />
							<strong>Resistência: </strong> 100
							<br />
							<strong>Poder: </strong> 100
							<br />
							<strong>Combate: </strong> 100
						</Description>
					</Box>
				</Card>
			</DetailsGrid>
			<Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
				<Box>
					<Button ghost>
						Voltar
					</Button>
				</Box>
			</Flex>
		</Container>
        )
	);
}