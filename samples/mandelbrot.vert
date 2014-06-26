//
// Look in the fragment shader for the mandelbrot implementation
//

attribute vec3 vertex;
attribute vec2 uv1;

uniform mat4 _mvProj;

varying vec2 uv;

void main(void) {
 gl_Position = _mvProj * vec4(vertex, 1.0);
 vec2 bla = vec2(1,2);
 uv = uv1;
}
