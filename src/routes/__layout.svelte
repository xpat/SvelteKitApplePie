<nav>
	<ul>
	<li>
	<a href="/">Home</a>
	</li>
	<li>
	<a href="/about">About</a>
	</li>
	<li>
		<a href="/login">Login</a>
	</li>
	<li>
		<a href="/">Logout</a>
	</li>
<li>
	<a href="/settings">Settings</a>
	</li>
	</ul>
</nav>

<slot></slot>
<style>
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		margin-right: 20px;
		font-weight: bold;
	}
	a {
		color:sienna;
		text-decoration: none;
	}
	a:hover {
		color:saddlebrown;
	}


</style>