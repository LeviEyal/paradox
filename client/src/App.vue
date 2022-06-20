<script setup>
import { ref } from "vue";
import MainPage from "./components/MainPage.vue";


const currentPath = ref(window.location.hash);

window.addEventListener(
	"hashchange",
	() => (currentPath.value = window.location.hash)
);

const routes = {
	"#/": MainPage,
	"#/main": MainPage,
};
</script>

<!---------------------------------------------------------------------->
<template>
	<header>
		<div class="wrapper">
			<img id="logo" src="./assets/paradox-logo.png" alt="logo" width="150px" />
			<div class="nav-links">
				<a href="#/main">Main</a>
			</div>
		</div>
	</header>

	<main>
		<MainPage/>
	</main>
	<footer>
		<div class="wrapper">
			<p>&copy; 2020 Paradox</p>
		</div>
	</footer>
</template>

<!---------------------------------------------------------------------->
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600&family=Poppins:wght@600;700&display=swap");
body {
	margin: auto;
	padding: auto;
}
#app {
	background-color: #ffffff;
	font-family: "Montserrat Alternates", sans-serif;
	width: 100%;
	height: 100%;
}

header {
	line-height: 1;
	position: sticky;
	top: 0;
	background-color: rgb(142, 240, 77, 0.4);
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
	padding: 10px;
	z-index: 999;
}

main {
	max-width: 800px;
	margin: 40px auto;
	background-color: rgba(247, 245, 245, 0.8);
	padding: 10px;
	border-radius: 10px;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.308);
	margin-bottom: 100px;
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

#logo {
	margin: 5px;
}

footer {
	line-height: 1;
	position: fixed;
	bottom: 0;
	background-color: rgb(142, 240, 77, 0.4);
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
	padding: 10px;
	width: 100%;
}

.nav-links {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.nav-links > a {
	text-decoration: none;
	color: #000000;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1px;
	font-family: "Poppins", sans-serif;
}
</style>
