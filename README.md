## CompraUnilever's Suggested List editor built in React
<p align="center">
  <img src="https://img.shields.io/badge/React-16.3.1-blue.svg">
  <br/>
  <img src="./doc/img/react-lista-sugerida.gif">
</p>

<p align="center">
   <a href="https://lista-sugerida-unilever.glitch.me/" target="_blank">Live Demo</a>
</p>

Just copy and paste this JSON in the import tab to test the application.
``` Javascript
[
{
	"titulo": "Mais vendidos",
	"icone": "http://i-unilever.a8e.net.br/static/images/ico-mais-vendidos.png",
	"specialClass": "layout-blue",
	"categorias": [
	{
		"titulo": "Cuidados Pessoais, Alimentos, Roupa e Casa",
		"isHPF": true,
		"listas": [
		{
			"titulo": "20 mais vendidos",
			"desconto": 3,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-20-produtos-mais-vendidos"
		},
		{
			"titulo": "30 mais vendidos",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-30-produtos-mais-vendidos"
		},
		{
			"titulo": "40 mais vendidos",
			"desconto": 7,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-40-produtos-mais-vendidos"
		}]
	},
	{
		"titulo": "Roupa e Casa",
		"listas": [
		{
			"titulo": "20 mais vendidos",
			"desconto": 3,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-20-produtos-mais-vendidos-roupa-casa-alimentos"
		},
		{
			"titulo": "30 mais vendidos",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-30-produtos-mais-vendidos-roupa-casa-alimentos"
		},
		{
			"titulo": "40 mais vendidos",
			"desconto": 3,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-40-produtos-mais-vendidos-roupa-casa-alimentos"
		}]
	},
	{
		"titulo": "Cuidados Pessoais",
		"listas": [
		{
			"titulo": "20 mais vendidos",
			"desconto": 3,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-20.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-20-produtos-mais-vendidos-cuidados-pessoais"
		},
		{
			"titulo": "30 mais vendidos",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-30.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-30-produtos-mais-vendidos-cuidados-pessoais"
		},
		{
			"titulo": "40 mais vendidos",
			"desconto": 3,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-produtos-40.png",
			"link": "http://www.compraunilever.com.br/static/page_unilever-listas-dos-40-produtos-mais-vendidos-cuidados-pessoais"
		}]
	}],
	"oldLayout": true
},
{
	"titulo": "Lançamentos",
	"icone": "http://i-unilever.a8e.net.br/static/images/ico-lancamentos.png",
	"specialClass": "layout-pink",
	"categorias": [
	{
		"titulo": "Ultimos três meses",
		"listas": [
		{
			"titulo": "Cuidados Roupa e Casa",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-lancamento-casa.png",
			"link": "https://www.compraunilever.com.br/static/preview_unilever-listas-lancamentos-cuidados-roupa-e-casa"
		},
		{
			"titulo": "Alimentos e Chás",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-lancamento-alimentos.png",
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-lancamentos-alimentos-e-chas"
		},
		{
			"titulo": "Cuidados Pessoais",
			"desconto": 5,
			"icone": "http://i-unilever.a8e.net.br/static/images/icon-lancamento-cuidados.png",
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-lancamentos-cuidados-pessoais"
		}]
	}]
},
{
	"titulo": "Recomendados",
	"icone": "http://i-unilever.a8e.net.br/static/images/ico-recomendados.png",
	"specialClass": "layout-blue",
	"categorias": [
	{
		"titulo": "Sortimento Prioritário",
		"listas": [
		{
			"titulo": "Casa",
			"desconto": 3,
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-recomendados-casa"
		},
		{
			"titulo": "Culinários",
			"desconto": 3,
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-recomendados-culinarios"
		},
		{
			"titulo": "Cabelos",
			"desconto": 3,
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-recomendados-cabelos"
		},
		{
			"titulo": "Desodorantes",
                        "desconto": 5,
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-recomendados-desodorantes"
		},
		{
			"titulo": "Orgânicos e Naturais",
			"desconto": 5,
			"link": "https://www.compraunilever.com.br/static/page_listas-unilever-recomendados-organicos-e-naturais"
		}
		]
	}]
}]
```

<br/>
<br/>

<p align="center"><img src="https://avatars2.githubusercontent.com/u/20846473?s=70&v=4" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>
