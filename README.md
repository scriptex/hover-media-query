[![Github Build](https://github.com/scriptex/hover-media-query/workflows/Build/badge.svg)](https://github.com/scriptex/hover-media-query/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/hover-media-query/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/hover-media-query&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-hover-media-query-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/hover-media-query/badge)](https://www.codefactor.io/repository/github/scriptex/hover-media-query)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/hover-media-query/README.md?pixel)](https://github.com/scriptex/hover-media-query/)

# CSS Hover Media Query

> A progressively enhanced "hover" media query.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/hover-media-query?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/hover-media-query?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/hover-media-query?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/hover-media-query)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/hover-media-query?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/hover-media-query?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/hover-media-query?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/hover-media-query?style=plastic)

## About

Detailed info about the Hover CSS media feature can be found [on the MDN website](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover).

This CSS media feature is implemented and supported in almost all modern browsers and works as expected.

The modern browsers include Chrome, Opera, Safari, Edge, Brave, Vivaldi, etc.

Internet Explorer and Firefox (prior v.64) do not understand this media feature and therefore will simply ignore all rules inside the query.

## Details

The Hover Media Query module provides means to progressively enhance the CSS hover state by providing a unified set of media queries which target all browsers:

-   those which support the hover media query and:

    -   support hover
    -   do not support hover

-   those which do not support the hover media query at all

## Examples

The following example shows how to use the Hover Media Query and target all browsers which support the `hover` CSS media query.

The following example targets also browsers which do not support it (such as IE and Firefox prior v.64).

```css
/**
 * Enable hover states on devices which support hover media feature.
 * On IE10, IE11 and Firefox prior v.64 hover states work on any device.
 *
 * -ms-high-contrast: none      Targets IE10 and IE11
 * -ms-high-contrast: active    Targets IE10 and IE11
 * -moz-touch-enabled: 0        Targets Firefox before 64
 * hover: hover                 Targets all browsers which support the Hover CSS Media Feature
 */
@media (-ms-high-contrast: none), (-ms-high-contrast: active), (-moz-touch-enabled: 0), (hover: hover) {
	.element:hover {
		color: lavender;
	}
}
```

The following example shows how to use the Hover Media Query and target all browsers which support the `hover` media query but do not support the CSS hover state (such as mobile browsers which are usually used without a pointer device).

```css
/**
 * For devices which support the "hover" media query but do not support ":hover" state
 * the following media query disables the highlight color on tap on the element and
 * adds styles to the ":active" state
 */
@media (hover: none) {
	.element {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.element:active {
		color: lavender;
	}
}
```

## Bonus 1: SCSS mixin

If your environment supports the SCSS language, you can use the SCSS provided here:

First define the SCSS mixin:

```scss
@mixin hover {
	@media (hover: none) {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		&:active {
			@content;
		}
	}

	@media (-ms-high-contrast: none), (-ms-high-contrast: active), (-moz-touch-enabled: 0), (hover: hover) {
		&:hover {
			@content;
		}
	}
}
```

Or import it:

```scss
@import 'hover-media-query/hover.scss';
```

And then use it wherever appropriate:

```scss
.button {
	@include hover {
		color: lavender;
	}
}
```

## Bonus 2: PostCSS custom media queries

If your environment is configured to use the PostCSS postprocessor, you can use the custom PostCSS media queries.
In order to to so you need to install and configure the [PostCSS Custom Media plugin](https://github.com/postcss/postcss-custom-media)

First define the custom media queries:

```css
@custom-media --hover (-ms-high-contrast: none), (-ms-high-contrast: active), (-moz-touch-enabled: 0), (hover: hover);
@custom-media --no-hover (hover: none);
```

Or import them:

```css
@import 'hover-media-query/hover.css';
```

And then use them wherever appropriate:

```css
@media (--hover) {
	.button:hover {
		color: lavender;
	}
}

@media (--no-hover) {
	.button {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.button:active {
		color: rebeccapurple;
	}
}
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
