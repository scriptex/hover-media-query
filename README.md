# CSS Hover Media Query

> A progressively enhanced "hover" media query.

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

🚧 TODO: Add import example

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

## Bonus 2: PostCSS custom media queries

If your environment is configured to use the PostCSS postprocessor, you can use the custom PostCSS media queries.
In order to to so you need to install and configure the [PostCSS Custom Media plugin](https://github.com/postcss/postcss-custom-media)

🚧 TODO: Add import example

First define the custom Media Queries:

```css
@custom-media --hover (-ms-high-contrast: none), (-ms-high-contrast: active), (-moz-touch-enabled: 0), (hover: hover);
@custom-media --no-hover (hover: none);
```

And then use them wherever appropriate:

```scss
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

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fhover-media-query&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate on PayPal](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/scriptex)
[![Donate on Liberapay](https://img.shields.io/liberapay/receives/scriptex.svg?logo=liberapay)](https://liberapay.com/scriptex/)
[![Donate on Issuehunt](https://raw.githubusercontent.com/BoostIO/issuehunt-materials/master/v1/issuehunt-shield-v1.svg)](https://issuehunt.io/r/scriptex/hover-media-query)

## LICENSE

MIT
