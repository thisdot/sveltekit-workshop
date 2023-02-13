<div class="box">
	<slot>
		<em>no content was provided</em>
	</slot>
	<footer>
		<slot name="footer" />
	</footer>
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}

	footer {
		background-color: lightgray;
		padding: 0 1em;
	}
</style>
