#ifdef GL_ES
precision highp float;
#endif
varying vec3 vColor;
varying vec2 uv;

uniform sampler2D tex;

void main(void)
{
	gl_FragColor = texture2D(tex,uv)*vec4(vColor, 1.0);
}
