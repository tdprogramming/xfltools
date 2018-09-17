function flashjs_filters_BlurFilter_construct(blurX=4.0, blurY=4.0, quality=1) 
{
	return new createjs.BlurFilter(blurX, blurY, quality);
}