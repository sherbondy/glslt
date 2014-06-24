#ifdef GL_ES
precision highp float;
#endif
varying vec2 uv;

const float mandel_x = -2.0;
const float mandel_y = -2.0;
const float mandel_width = 4.0;
const float mandel_height = 4.0;
const float mandel_x2 = -2.0+1.29;
const float mandel_y2 = -2.0+2.27;
const float mandel_width2 = 0.04;
const float mandel_height2 = 0.04;

const int mandel_iterations = 128;

uniform sampler2D gradientTexture;
uniform float _time;

// calcualte the mandelbrot iterations for a given position
int calculateMandelbrotIterations(vec2 position) {
    float x = position.x;
    float y = position.y;
    float xx = 0.0;
	float yy = 0.0;
    int count = 0;
	for (int iter = 0;iter < mandel_iterations;iter++){
        float xx2 = xx*xx;
        float yy2 = yy*yy;
        if (xx2 + yy2 <=4.0){
    		float temp = xx2 - yy2 + x;
     		yy = 2.0*xx*yy + y;
    		xx = temp;
     		count ++;
        }
 	}
 	return count;
}

// Calculate the pixel color by looking up in the gradient texture
// To make it more alive, the texture also interpolates between multiple
// gradient (each row in the texture)
vec4 getColor(int iterations) {
	if (iterations==mandel_iterations){
		return vec4(0.0,0.0,0.0,1.0);
 	}
    float uvY = _time*0.00001;
    float uvX = float(iterations)/float(mandel_iterations);
    uvX = uvX*uvX;
    return texture2D(gradientTexture, vec2(uvX,uvY));
}

// Ping pong between two value
float pingPong(float length,float value){
    float res = mod(value, (length*2.0));
    if (res > length){
        res = 2.0*length-res;
    }
    return res;
}

// Smoothstep between two views on the mandelbrot (based on time)
vec2 getPosition(){
    float time = _time*0.00005;
    float timePP = smoothstep(0.0,1.0,pingPong(1.0,time));

    float x = mix(mandel_x,mandel_x2,timePP)+uv.x*mix(mandel_width,mandel_width2,timePP);
    float y = mix(mandel_y,mandel_y2,timePP)+uv.y*mix(mandel_height,mandel_height2,timePP);
    return vec2(x,y);
}

void main()
{
 	vec2 pos = getPosition();
 	int iterations = calculateMandelbrotIterations(pos);
 	gl_FragColor = getColor(iterations);
}
