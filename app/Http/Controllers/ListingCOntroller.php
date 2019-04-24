<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
class ListingCOntroller extends Controller
{
		public function get_listing_api(Listing $listing)
		{
			for($i=1;$i<=4;$i++) {
				$model['image_'.$i] = asset (
					'images/'.$listing->id.'/Image_'.$i.'.jpg'
				);
			}
			return $listing->toJson();
		}
}