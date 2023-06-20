/*
////////////////////////////////////
VM v2 - Site component
///////////////////////////////////
*/
console.log('main.js imported successfully')
var VMSite = {
	params: { ajaxNoCache: '' },
	init: function () {
		// Initialize navigation
		VMSite.nav.init()
		VMSite.nav.fixed()
		VMSite.nav.colheights()
		// VMSite.nav.colheightsInterval = setInterval(function(){ VMSite.nav.colheights(); },750);

		window.addEventListener('resize', function () {
			VMSite.nav.colheights()
		})

		if (window.location.pathname.toLowerCase().indexOf('vmnocache') > -1) {
			VMSite.params.ajaxNoCache = '&vmNoCache=1'
		}

		// Homepage
		if ($('body').hasClass('Home')) {
			VMSite.home.init()
		}

		// Gallery & Inventory Items
		if ($('body').hasClass('Gallery')) {
			VMSite.gallery.init()
			$(window).resize(function () {
				var openItemsBlock = $('#VMSite').find('.category-items.on .category-links')
				if (openItemsBlock.length) {
					VMSite.gallery.heights(openItemsBlock)
				}
			})
		}

		// Inventory
		if ($('body').hasClass('Inventory')) {
			VMSite.inventory.init()
		}

		// Inventory Items
		if ($('body').hasClass('Inventory-Items')) {
			VMSite.inventoryitems.init()
		}

		// Inventory Items - Detail
		if ($('body').hasClass('Inventory-Item-Detail')) {
			VMSite.itemdetail.init()
		}

		// Blog
		if ($('body').hasClass('Blog')) {
			VMSite.blog.init()
		}

		// Contact
		if ($('body').hasClass('Contact')) {
			VMSite.contact.init()
		}

		// Refer
		if ($('body').hasClass('Refer')) {
			VMSite.refer.init()
		}

		// Get typeahead from cache if it exists and it's recent
		// if (VMSite.util.LocalStorage.get('cacheKey') !== VMSiteCacheKey || !VMSite.util.LocalStorage.get('typeahead') || VMSite.util.TimeElapsed({ time: VMSite.util.LocalStorage.get('typeahead.timestamp'), unit: 'm' }) > 10) {
		// 	$.get(vmSiteDir + 'ajax_calls.php?type=typeahead' + VMSite.params.ajaxNoCache)
		// 		.done(function (json) {
		// 			VMSite.util.LocalStorage.set('typeahead', {
		// 				items: json.Items,
		// 				timestamp: new Date().getTime(),
		// 			})
		// 			VMSite.typeahead()
		// 		})
		// 		.fail(function (jqXHR, textStatus, errorThrown) {
		// 			console.error('Error in AJAX request:', textStatus, errorThrown)
		// 		})
		// } else {
		// 	VMSite.typeahead()
		// }

		console.log('AJAX URL:', vmSiteDir + 'ajax_calls.php?type=typeahead' + VMSite.params.ajaxNoCache)

		// Set localStorage cache key
		VMSite.util.LocalStorage.set('cacheKey', VMSiteCacheKey)

		// Cache the element
		var $maincolSidebarNav = $('.maincolSidebarNav')

		// Get the original position of the element
		var originalOffsetTop = $maincolSidebarNav.offset().top

		// Add the scroll event listener
		$(window).on('scroll', function () {
			// Check the scroll position
			if ($(window).scrollTop() >= originalOffsetTop) {
				// Add the 'affix' class when the element should be fixed
				$maincolSidebarNav.addClass('affix')
			} else {
				// Remove the 'affix' class when the element should be in its original position
				$maincolSidebarNav.removeClass('affix')
			}
		})
	},
	blog: {
		init: function () {
			VMSite.masterslider.init()
			$('#VMSite')
				.on('click', 'form.blogSidebar .btn', function (e) {
					e.preventDefault
					var form = $('#VMSite form.blogSidebar')
					if (form.find('[name="search"]').val()) {
						form.submit()
					} else {
						alert('Please enter a search phrase.')
					}
				})
				.on('change', 'select.blogSidebar', function (e) {
					window.location = $(this).find('option:selected').val()
				})
		},
	},
	contact: {
		init: function () {
			$('body.Contact form').wrapInner('<div class="loading" style="position:relative;width:100%;"></div>')
			VMSite.contact.initUploader()
			$('body.Contact')
				.on('submit', 'form', function (e) {
					e.preventDefault()
					var form = $(this)
					var formLoading = form.find('.loading')
					var formLabels = form.find('span[rel]')
					var formInputs = form.find('input[type="text"],textarea,select')
					var formErrors = form.find('.error')
					var formSubmit = function () {
						form.find('input[type="submit"]').removeClass('hidden').end().find('span.contactUploadMsg').html('').end()
						formLoading.css({ opacity: '.2' })
						// var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#000', bgAlpha:'0', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
						setTimeout(function () {
							$.post(
								vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=postContact',
								form.serialize(),
								function (data) {
									form.find('.alert').remove()
									var msgType = 'success'
									var msgText = ''
									var msgWait = 4000
									if (data.success) {
										formInputs.val('')
										msgText = '<h4 style="margin-top:0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><p style="margin-bottom:0;">We will be contacting you shortly.'
										if (data.form.itemlink) {
											msgText += ' Click the link above to return to your item.'
										}
										msgText += '</p>'
									} else {
										msgText = '<h4 style="margin-top:0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>'
										msgWait = 1000
										msgType = 'danger'
										if (data.errormsg) {
											msgText += '<p>' + data.errormsg + '</p>'
										}
										if (!_.isEmpty(data.errStruct)) {
											var arrErrKeys = []
											_.each(data.errStruct, function (val, key) {
												form.find('span[rel="' + key + '"]')
													.text(val)
													.addClass('error')
												arrErrKeys.push(key)
											})
											msgText += '<p>See the fields in red below...</p>'
											$(formInputs.get().reverse()).each(function () {
												var thisName = $(this).attr('name')
												if (_.indexOf(arrErrKeys, thisName) > -1) {
													$(this).focus()
												}
											})
										}
									}
									formLoading.css({ opacity: '1' }).prepend('<div class="alert alert-' + msgType + '">' + msgText + '</div>')
									if (data.success) {
										setTimeout(function () {
											formLoading.find('.alert').slideUp(1000, function () {
												$(this).remove()
											})
										}, msgWait)
										VMSite.contact.initUploader()
										$('html,body').animate({ scrollTop: '100px' }, 500)
									}
									loader.remove()
								},
								'json'
							)
						}, 500)
					}
					// Process form
					form.find('input[type="submit"]').blur()
					formErrors.removeClass('error')
					formLabels.each(function () {
						$(this).text($(this).data('origText'))
					})
					try {
						var uploader = $('#contactUploader').pluploadQueue()
						if (uploader && uploader.total.uploaded == 0 && uploader.files.length > 0) {
							form.find('input[type="submit"]').addClass('hidden').end().find('span.contactUploadMsg').html('<div class="alert alert-success" style="margin:0;"><i class="fa fa-spinner fa-pulse"></i>&nbsp; Please wait while your images upload...</div>').end()
							uploader.bind('UploadProgress', function () {
								if (uploader.total.uploaded == uploader.files.length) {
								}
							})
							uploader.bind('UploadComplete', function () {
								formSubmit()
							})
							uploader.start()
						} else {
							formSubmit()
						}
					} catch (err) {
						$.log(err)
					}
				})
				.find('span[rel]')
				.each(function () {
					$(this).data('origText', $(this).text())
				})
		},
		initUploader: function () {
			var contactForm = $('body.Contact form')
			$('#contactUploader').html('')
			$('#contactUploader').pluploadQueue({
				// General settings
				runtimes: 'html5,flash,silverlight',
				url: vmSiteDir + 'js/plupload/upload.2.2.1.php',
				max_file_size: '10mb',
				chunk_size: '1mb',
				unique_names: true,
				resize: { width: 1024, height: 1024, quality: 90 },
				filters: [
					{ title: 'Image files', extensions: 'jpg,jpeg,gif,png' },
					{ title: 'PDF files', extensions: 'pdf' },
				],
				flash_swf_url: vmSiteDir + 'js/plupload/flash.swf',
				silverlight_xap_url: vmSiteDir + 'js/plupload/silverlight.xap',
				preinit: {
					Init: function (up, info) {
						$('#contactUploader .plupload_add').html('<i class="fa fa-plus-circle"></i>&nbsp; Add Files')
						$('#contactUploader .plupload_start').html('<i class="fa fa-cloud-upload"></i>&nbsp; Start Upload')
						VMSite.contact.uploadLog('[Init]', 'Info:', info, 'Features:', up.features)
					},
					UploadFile: function (up, file) {
						VMSite.contact.uploadLog('[UploadFile]', file)
						// You can override settings before the file is uploaded
						// up.settings.url = 'upload.php?id=' + file.id;
						// up.settings.multipart_params = {param1 : 'value1', param2 : 'value2'};
					},
				},
				init: {
					Refresh: function (up) {
						// Called when upload shim is moved
						VMSite.contact.uploadLog('[Refresh]')
					},
					StateChanged: function (up) {
						// Called when the state of the queue is changed
						VMSite.contact.uploadLog('[StateChanged]', up.state == plupload.STARTED ? 'STARTED' : 'STOPPED')
					},
					QueueChanged: function (up) {
						// Called when the files in queue are changed by adding/removing files
						VMSite.contact.uploadLog('[QueueChanged]')
					},
					UploadProgress: function (up, file) {
						// Called while a file is being uploaded
						VMSite.contact.uploadLog('[UploadProgress]', 'File:', file, 'Total:', up.total)
					},
					UploadComplete: function (up, files) {
						var hiddenVal = ''
						for (var i in up.files) {
							hiddenVal += ',' + up.files[i].id + '.' + up.files[i].name.split('.')[1]
						}
						contactForm.find('[name="uploadedFiles"]').val(hiddenVal)
					},
					FilesAdded: function (up, files) {
						// Callced when files are added to queue
						VMSite.contact.uploadLog('[FilesAdded]')
						plupload.each(files, function (file) {
							VMSite.contact.uploadLog('  File:', file)
						})
						$('#contactUploader li.plupload_delete .plupload_file_action a').html('<i class="fa fa-minus-circle" style="color:red;"></i>')
					},
					FilesRemoved: function (up, files) {
						// Called when files where removed from queue
						VMSite.contact.uploadLog('[FilesRemoved]')
						plupload.each(files, function (file) {
							VMSite.contact.uploadLog('  File:', file)
						})
					},
					FileUploaded: function (up, file, info) {
						// Called when a file has finished uploading
						VMSite.contact.uploadLog('[FileUploaded] File:', file, 'Info:', info)
						setTimeout(function () {
							$('#contactUploader li.plupload_done .plupload_file_action a')
								.html('<i class="fa fa-check-circle" style="color:green;"></i>')
								.click(function (e) {
									e.preventDefault()
								})
						}, 500)
					},
					ChunkUploaded: function (up, file, info) {
						// Called when a file chunk has finished uploading
						VMSite.contact.uploadLog('[ChunkUploaded] File:', file, 'Info:', info)
					},
					Error: function (up, args) {
						// Called when a error has occured
						VMSite.contact.uploadLog('[error] ', args)
					},
				},
			})
			VMSite.nav.colheights()
		},
		uploadLog: function () {
			var str = ''
			plupload.each(arguments, function (arg) {
				var row = ''
				if (typeof arg != 'string') {
					plupload.each(arg, function (value, key) {
						// Convert items in File objects to human readable form
						if (arg instanceof plupload.File) {
							// Convert status to human readable
							switch (value) {
								case plupload.QUEUED:
									value = 'QUEUED'
									break
								case plupload.UPLOADING:
									value = 'UPLOADING'
									break
								case plupload.FAILED:
									value = 'FAILED'
									break
								case plupload.DONE:
									value = 'DONE'
									break
							}
						}
						if (typeof value != 'function') {
							row += (row ? ', ' : '') + key + '=' + value
						}
					})
					str += row + ' '
				} else {
					str += arg + ' '
				}
			})
			$.log('UPLOADER EVENTS\n\n' + str + '\n\n')
		},
	},
	gallery: {
		heights: function (categorylinks) {
			var device = VMSite.util.Device()
			var $captions = categorylinks.find('.category-links-caption')
			$captions.css({ height: 'auto' })
			if (device.view.toLowerCase() !== 'mobile') {
				var maxHeight = Math.max.apply(
					Math,
					$captions
						.map(function () {
							return $(this).height()
						})
						.get()
				)
				$captions.height(maxHeight)
			}
		},
		init: function () {
			var $gallery = VMSite.gallery
			$('#VMSite').on('click', '.category-title', function (e) {
				e.preventDefault()
				$gallery.load($(this).parent())
			})
		},
		load: function (category) {
			var $gallery = VMSite.gallery
			var categories = $('#VMSite').find('.category-items')
			var title = category.find('.category-title')
			var links = category.find('.category-links')
			var termId = category.data('key') // Get the term ID from the data attribute

			if (category.hasClass('on')) {
				category.removeClass('on')
				title.find('h4').removeClass('hidden')
				links.addClass('hidden')
			} else {
				categories.removeClass('on').find('.category-title h4').removeClass('hidden').end().find('.category-links').addClass('hidden').end()
				category.addClass('on')
				title.find('h4').addClass('hidden')
				links.removeClass('hidden')
				VMSite.util.Loader({ ele: links, color: '#444', size: '3' })

				$.ajax({
					url: '/wp-admin/admin-ajax.php',
					data: {
						action: 'load_items_by_term',
						term_id: termId,
					},
					success: function (response) {
						links.html(response)
						$gallery.heights(links)
					},
				})
			}
		},
	},
	home: {
		init: function () {
			// VMSite.masterslider.init()
			// $('#VMSite')
			// 	.on('click','.ms-showcase1 .ms-slide-info .ms-info',function(e){
			// 		e.preventDefault();
			// 		window.location = $(this).data('url');
			// 	});
			// $.get(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?setCat=1'+VMSite.params.ajaxNoCache,function(data){ });
		},
	},
	inventory: {
		heights: function (categorylinks) {
			var device = VMSite.util.Device()
			var $captions = categorylinks.find('.category-links-caption')
			$captions.css({ height: 'auto' })
			if (device.view.toLowerCase() !== 'mobile') {
				var maxHeight = Math.max.apply(
					Math,
					$captions
						.map(function () {
							return $(this).height()
						})
						.get()
				)
				$captions.height(maxHeight)
			}
		},
		init: function () {
			var $inventory = VMSite.inventory
			$('#VMSite').on('click', '.category-title', function (e) {
				e.preventDefault()
				$inventory.load($(this).parent())
			})
		},
		load: function (category) {
			var $gallery = VMSite.gallery
			var categories = $('#VMSite').find('.category-items')
			var title = category.find('.category-title')
			var links = category.find('.category-links')
			var termId = category.data('key') // Get the term ID from the data attribute

			if (category.hasClass('on')) {
				category.removeClass('on')
				title.find('h4').removeClass('hidden')
				links.addClass('hidden')
			} else {
				categories.removeClass('on').find('.category-title h4').removeClass('hidden').end().find('.category-links').addClass('hidden').end()
				category.addClass('on')
				title.find('h4').addClass('hidden')
				links.removeClass('hidden')
				VMSite.util.Loader({ ele: links, color: '#444', size: '3' })

				$.ajax({
					url: '/wp-admin/admin-ajax.php',
					data: {
						action: 'load_items_by_term',
						term_id: termId,
					},
					success: function (response) {
						links.html(response)
						$gallery.heights(links)
					},
				})
			}
		},
	},
	inventoryitems: {
		init: function () {
			var itemLinks = $('.category-links')
			VMSite.gallery.heights(itemLinks)
			$(window).resize(function () {
				VMSite.gallery.heights(itemLinks)
			})
		},
	},
	itemdetail: {
		init: function () {
			// Image click
			$('.product-imgs').on('click', '.zoomLink', function (e) {
				e.preventDefault()
				$(this).blur()
				var title = $('#detailZoom .linkContainer').data('title')
				if (!VMSite.itemdetail.isZoomed) {
					var domProdImgs = $('.product-imgs')
					var mobileZoom = $('.mobileZoom')

					// Insert mobile preview images
					domProdImgs.addClass('zoomed').removeClass('visible-xs')
					var htmlSm = ''
					htmlSm += '<div class="instructions">'
					htmlSm += 'Hover over images to zoom in place. Click on any image to zoom in full screen.'
					htmlSm += '</div>'
					htmlSm += $('.product-imgs').html()
					mobileZoom.addClass('active').html(htmlSm)
					var topClose = mobileZoom.find('.close-zoom').clone()
					mobileZoom.prepend(topClose)
					mobileZoom
						.find('.zoomLink')
						.addClass('MagicZoom')
						.each(function () {
							var src = $(this).find('img').attr('src')
							$(this)
								.find('img')
								.attr('src', vmSiteDir + 'images/pages/blank_900.png')
								.css({ width: '100%', height: '300px', background: 'url(' + src.replace('thumbsm', 'thumblg') + ') center center no-repeat' })
							MagicZoom.refresh(this)
							$('body .mz-zoom-window').css({ zIndex: 99900 })
						})

					// Insert desktop preview images
					var htmlLg = ''
					domProdImgs.find('.zoomLink').each(function () {
						htmlLg += '<a class="MagicZoom" href="' + $(this).attr('href') + '" title="' + title.replace(/"/gi, '&quot;') + '">'
						htmlLg += '<img src="' + vmSiteDir + 'images/pages/blank_900.png" border="0" style="width:100%;background-image:url(' + $(this).data('preview') + ');" />'
						htmlLg += '</a>'
					})
					$('#detailText').addClass('visible-xs')
					$('#detailZoom').removeClass('hidden').find('.linkContainer .zoom-images').html(htmlLg)
					$('#detailZoom .MagicZoom').each(function () {
						MagicZoom.refresh(this)
						$('body .mz-zoom-window').css({ zIndex: 99900 })
					})

					VMSite.nav.colheights()
					VMSite.itemdetail.isZoomed = true
				} else {
					VMSite.itemdetail.closeZoom()
				}
			})
			$('.product-imgs').on('click', '.close-zoom a', function (e) {
				e.preventDefault()
				VMSite.itemdetail.closeZoom()
			})
			$('.mobileZoom').on('click', '.close-zoom a', function (e) {
				e.preventDefault()
				VMSite.itemdetail.closeZoom()
			})
			$('#detailZoom').on('click', '.close-zoom a', function (e) {
				e.preventDefault()
				VMSite.itemdetail.closeZoom()
			})

			$('.actionBar').on('click', '.actionLink[href="#formPurchase"],.actionLink[href="#formPriceReduced"]', function (e) {
				e.preventDefault()
				$(this).blur()
				$('#detailText').addClass('hidden')
				$('#detailZoom')
					.removeClass('hidden')
					.addClass('formInlinePopup')
					.find('.linkContainer .zoom-images')
					.html($($(this).attr('href')).html())
					.end()
					.find('.instructions')
					.addClass('hidden')
					.end()
				$('#detailZoom')
					.removeClass('hidden')
					.parent('div')
					.addClass('visible-xs')
					.end()
					.find('form label')
					.each(function () {
						$(this).data('origText', $(this).text())
					})
				VMSite.nav.colheights()
				$('html,body').animate({ scrollTop: $('#detailZoom').offset().top - 55 + 'px' }, 500)
			})

			$('#detailZoom').on('submit', '.formPurchase form', function (e) {
				e.preventDefault()
				var form = $(this)
				var formLabels = form.find('label')
				var formInputs = form.find('input[type="text"],textarea')
				var formErrors = form.find('.error')
				var formWidth = form.outerWidth()
				var formHeight = form.outerHeight()
				form.find('input[type="submit"]').blur()
				form.find('.alert').remove()
				formErrors.removeClass('error')
				formLabels.each(function () {
					$(this).text($(this).data('origText'))
				})
				// var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#fff', bgAlpha:'.9', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'85%' });
				setTimeout(function () {
					$.post(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=postPurchase', form.serialize(), function (data) {
						var msgText = ''
						var msgType = 'success'
						var msgWait = 5000
						if (data.success) {
							formInputs.val('')
							form.find('input[type="checkbox"]').prop('checked', false)
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><span class="byline">We will contact you shortly to complete your purchase. This form will close automatically.</span>'
						} else {
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>'
							msgType = 'danger'
							msgWait = 3500
							if (!_.isEmpty(data.errStruct)) {
								_.each(data.errStruct, function (val, key) {
									form.find('label[for="' + key + '"]')
										.text(val)
										.addClass('error')
								})
							}
							if (data.errormsg) {
								msgText += '<span class="byline">' + data.errormsg + '</span>'
								msgWait = 3500
							}
						}
						form.prepend('<div class="alert alert-' + msgType + '" style="margin:1em 0;background:white !important;box-shadow:none !important;">' + msgText + '</div>')
						var msg = form.find('.alert')
						loader.remove()
						$('html,body').animate({ scrollTop: msg.offset().top - 55 + 'px' }, 500)
						if (data.success) {
							setTimeout(function () {
								$('#detailZoom .close-zoom a').eq(0).trigger('click')
							}, msgWait)
						}
					})
				}, 500)
			})

			$('#detailZoom').on('submit', '.formPriceReduced form', function (e) {
				e.preventDefault()
				var form = $(this)
				var formLabels = form.find('label')
				var formInputs = form.find('input[type="text"]')
				var formErrors = form.find('.error')
				var formWidth = form.outerWidth()
				var formHeight = form.outerHeight()
				form.find('input[type="submit"]').blur()
				form.find('.alert').remove()
				formErrors.removeClass('error')
				formLabels.each(function () {
					$(this).text($(this).data('origText'))
				})
				// var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#fff', bgAlpha:'.9', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
				setTimeout(function () {
					$.post(vmSiteDir + 'incs/ajaxCalls_v2dynamic.cfm?type=postPriceChange', form.serialize(), function (data) {
						var msgText = ''
						var msgType = 'success'
						var msgWait = 5000
						if (data.success) {
							formInputs.val('')
							msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><span class="byline">You will receive Vintage Memorabilia alerts when the price of this item changes. This form will close automatically.</span>'
						} else {
							if (!_.isEmpty(data.errStruct)) {
								_.each(data.errStruct, function (val, key) {
									form.find('label[for="' + key + '"]')
										.text(val)
										.addClass('error')
								})
								msgText = '<h4 style="margin:0 0 .5em 0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>'
								msgType = 'danger'
								msgWait = 1000
							}
							if (data.errormsg) {
								msgText += '<span class="byline">' + data.errormsg + '</span>'
								msgWait = 3500
							}
						}
						form.prepend('<div class="alert alert-' + msgType + '" style="margin:1em 0;background:white !important;box-shadow:none !important;">' + msgText + '</div>')
						var msg = form.find('.alert')
						loader.remove()
						$('html,body').animate({ scrollTop: msg.offset().top - 55 + 'px' }, 500)
						if (data.success) {
							setTimeout(function () {
								$('#detailZoom .close-zoom a').eq(0).trigger('click')
							}, msgWait)
						}
					})
				}, 500)
			})
		},
		isZoomed: false,
		closeZoom: function () {
			$('.product-imgs').removeClass('zoomed').addClass('visible-xs')
			$('.mobileZoom').removeClass('active').html('')
			$('#detailText').removeClass('hidden visible-xs')
			$('#detailZoom').addClass('hidden').removeClass('formInlinePopup').find('.instructions').removeClass('hidden').end().find('.zoom-images').html('').end().parent('div').removeClass('visible-xs').end()
			VMSite.nav.colheights()
			VMSite.itemdetail.isZoomed = false
			$('html,body').animate({ scrollTop: '100px' }, 500)
		},
	},
	masterslider: {
		init: function () {
			var device = VMSite.util.Device()
			var MSConfig = {
				main: {
					width: 1024,
					height: 580,
					space: 0,
					fillMode: 'fit',
					speed: 25,
					preload: 0,
					view: 'partialWave',
					keyboard: true,
					wheel: true,
					loop: true,
					autoplay: true,
				}, //basic,fade,mask,wave,flow,stack,scale,focus,parallaxMask,partialWave,fadeBasic,fadeWave,fadeFlow
				slideinfo: {
					autohide: false,
					overVideo: true,
					size: 50,
					inset: false,
					align: 'bottom',
					margin: 0,
				},
				timebar: {
					autohide: false,
					overVideo: true,
					inset: false,
					align: 'bottom',
					margin: 0,
					color: 'rgba(204,204,204,.1)',
				},
				thumblist: {
					autohide: false,
					overVideo: true,
					width: 60,
					height: 60,
					type: 'thumbs',
					dir: 'h',
					speed: 17,
					inset: false,
					align: 'bottom',
					arrows: true,
					margin: 20,
					space: 10,
				},
			}
			var useParallax = $('body').hasClass('Home') || ($('body').hasClass('Blog') && !$('body').hasClass('BlogLanding')) ? true : false
			$('.master-slider').each(function () {
				var masterslider = new MasterSlider()
				var sliderID = $(this).attr('id')
				if (device.type.toLowerCase() === 'mobile' && device.orientation.toLowerCase() === 'portrait') {
					MSConfig.main.height = 1200
					MSConfig.main.view = 'focus'
					MSConfig.timebar.color = 'rgba(204,204,204,.3)'
					MSConfig.thumblist.arrows = false
					masterslider.setup(sliderID, MSConfig.main)
					masterslider.control('slideinfo', MSConfig.slideinfo)
					masterslider.control('timebar', MSConfig.timebar)
					// masterslider.control('thumblist',MSConfig.thumblist);
				} else {
					masterslider.setup(sliderID, MSConfig.main)
					masterslider.control('arrows')
					// slider.control('bullets');
					masterslider.control('slideinfo', MSConfig.slideinfo)
					masterslider.control('timebar', MSConfig.timebar)
					// masterslider.control('thumblist',MSConfig.thumblist);
					if (useParallax) {
						MSScrollParallax.setup(masterslider, 50, 80, true)
					}
				}
			})
		},
	},
	nav: {
		open: false,
		maincolContent: null,
		maincolSidebar: null,
		colheights: function () {
			var device = VMSite.util.Device()
			var maincolContent = $('.maincolContent')
			var maincolSidebar = $('.maincolSidebar')
			var $columnsInner = $('.content-left, .content-right')
			$('.maincolContent, .maincolSidebar, .content-left, .content-right').css({ height: 'auto' })
			if (device.view.toLowerCase() !== 'mobile') {
				var columnsInnerHeight = Math.max.apply(
					Math,
					$columnsInner
						.map(function () {
							return $(this).height()
						})
						.get()
				)
				$columnsInner.height(columnsInnerHeight)
			}
			maincolSidebar.height(Math.max(maincolContent.height(), maincolSidebar.height()))
			console.log('reset height')
		},
		init: function () {
			var $VMSite = $('#VMSite')
			$VMSite
				.on('click', '.navbar.navbar-inverse button.navbar-toggle', function (e) {
					e.preventDefault()
					$(this).blur()
					if (!VMSite.nav.open) {
						$VMSite.find('.row-offcanvas').addClass('active')
						$VMSite.find('.maincolSidebar').removeClass('hidden')
						VMSite.nav.open = true
					} else {
						$VMSite.find('.row-offcanvas').removeClass('active')
						$VMSite.find('.maincolSidebar').addClass('hidden')
						VMSite.nav.open = false
					}
				})
				.on('keyup', 'input[name="sitesearch"]', function (e) {
					if (e.which === 13 && _.trim($(this).val())) {
						$('.nav-search .sitesearch-submit[rel="' + $(this).attr('rel') + '"]').trigger('click')
					}
				})
				.on('click', '.sitesearch-submit', function (e) {
					e.preventDefault()
					$(this).blur()
					var field = $('.nav-search input[name="sitesearch"][rel="' + $(this).attr('rel') + '"]')
					var path = vmRootDir + 'index.cfm/view/search/term/' + field.val().replace(/\s/gi, '%20') + '/category/All%20Categories/' + (window.location.pathname.indexOf('vmNoCache/1') > -1 ? 'vmNoCache/1/' : '')
					window.open(path, '_top')
				})
		},
		fixed: function () {
			// Initial fixed navbar switcher
			var navFixed = $('.navbar-fixed-top')
			$(window)
				.on('resize', function () {})
				.on('scroll', function () {
					var pos = Math.round($(document).scrollTop())
					var switchpoint = 100
					if ((pos > switchpoint && navFixed.hasClass('hidden')) || (pos < switchpoint && !navFixed.hasClass('hidden'))) {
						navFixed.toggleClass('hidden')
						if ($(document).innerWidth() > 767 && pos < switchpoint && $('#VMSite .row-offcanvas').hasClass('active')) {
							$('#VMSite .navbar-fixed-top button.navbar-toggle').trigger('click')
						}
					}
				})
		},
	},
	refer: {
		init: function () {
			$('body.Refer form').wrapInner('<div class="loading" style="position:relative;width:100%;"></div>')
			$('body.Refer')
				.on('submit', 'form', function (e) {
					e.preventDefault()
					var form = $(this)
					var formLoading = form.find('.loading')
					var formLabels = form.find('span[rel]')
					var formInputs = form.find('input[type="text"],textarea')
					var formErrors = form.find('.error')
					form.find('input[type="submit"]').blur()
					formErrors.removeClass('error')
					formLabels.each(function () {
						$(this).text($(this).data('origText'))
					})
					formLoading.css({ opacity: '.2' })
					// var loader = VMSite.util.Loader({ ele:form, type:'overlay', bgColor:'#000', bgAlpha:'0', color:'rgba(206,169,65,1)', size:'4', spinnerLeft:'50%', spinnerTop:'50%' });
					// setTimeout(function() {
					// 	$.post(vmSiteDir+'incs/ajaxCalls_v2dynamic.cfm?type=postRefer',form.serialize(),function(data){
					// 		form.find('.alert').remove();
					// 		var msgType = 'success';
					// 		var msgText = '';
					// 		var msgWait = 4000;
					// 		if (data.success) {
					// 			formInputs.val('');
					// 			msgText = '<h4 style="margin-top:0;"><i class="fa fa-check"></i>&nbsp; Thank you - your submission was successful.</h4><p style="margin-bottom:0;">Your contact will recieve your referral via email, and you will receive a copy at the address you provided.</p>';
					// 		} else {
					// 			msgText = '<h4 style="margin-top:0;"><i class="fa fa-exclamation-triangle"></i>&nbsp; There were problems with your submission.</h4>';
					// 			msgWait = 1000;
					// 			msgType = 'danger';
					// 			if (data.errormsg) {
					// 				msgText += '<p>'+data.errormsg+'</p>';
					// 			}
					// 			if (!_.isEmpty(data.errStruct)) {
					// 				 var arrErrKeys = [];
					// 				 _.each(data.errStruct,function(val,key){
					// 					form.find('span[rel="'+key+'"]').text(val).addClass('error');
					// 					arrErrKeys.push(key);
					// 				});
					// 				msgText += '<p>See the fields in red below...</p>';
					// 				$(formInputs.get().reverse()).each(function(){
					// 					var thisName = $(this).attr('name');
					// 					if (_.indexOf(arrErrKeys,thisName) > -1) {
					// 						$(this).focus();
					// 					}
					// 				});
					// 			}
					// 		}
					// 		formLoading.css({ opacity:'1' }).prepend('<div class="alert alert-'+msgType+'">'+msgText+'</div>');
					// 		if (data.success) {
					// 			setTimeout(function(){
					// 				formLoading.find('.alert').slideUp(1000,function(){ $(this).remove(); });
					// 			},msgWait);
					// 			$('html,body').animate({ scrollTop:'100px' },500);
					// 		}
					// 		loader.remove();
					// 	});
					// }, 500);
				})
				.find('span[rel]')
				.each(function () {
					$(this).data('origText', $(this).text())
				})
		},
	},
	typeahead: function () {
		var arrItems = VMSite.util.LocalStorage.get('typeahead.items')
		var arrStrs = []
		_.each(arrItems, function (obj) {
			arrStrs.push(obj.person + ' ' + obj.title + (obj.related ? ' ' + obj.related.split(',').join(' ') : ''))
		})
		$('[name="sitesearch"]').each(function (e) {
			$(this)
				.on('keyup', function (e) {
					if (e.keyCode === 27) {
						$(this).val('')
					}
				})
				.typeahead({
					source: arrStrs,
					items: 10,
					autoSelect: false,
					highlighter: function (item) {
						var b = arrStrs.indexOf(item)
						var obj = arrItems[b]
						var template = ''
						template += '<span class="item">'
						template += '<span class="img">'
						template += '<img src="' + vmSiteDir + 'images/pages/blank.gif" border="0" style="background-image:url(' + vmUploadDir + 'images/thumbsm_' + obj.img + ');" />'
						template += '</span>'
						template += '<span class="title">' + obj.person + ': ' + obj.title + (obj.related ? ' (' + obj.related.split(',').join(', ') + ')' : '') + '</span>'
						template += '</span>'
						return template
					},
					updater: function (item) {
						$(this).focus()
						var obj = arrItems[arrStrs.indexOf(item)]
						window.open('/index.cfm/page/' + obj.url + '/' + (window.location.pathname.indexOf('vmNoCache/1') > -1 ? 'vmNoCache/1/' : ''), '_top')
						return false
						// var b = arrStrs.indexOf(item);
						// return updateSearch(arrItems[b],item);
					},
				})
		})
	},
	util: {
		DeviceVars: {
			keyWin: 'VMSiteData',
			keyCookie: 'VMSiteUserDevice',
			urlFlag: 'VMSitelogactions',
			domIDMsg: 'VMSiteDeviceAgent',
		},
		Device: function () {
			var $util = VMSite.util
			var $vars = VMSite.util.DeviceVars
			window[$vars.keyWin] = window[$vars.keyWin] ? window[$vars.keyWin] : { deviceAgent: VMSite.util.LocalStorage.get($vars.keyCookie) ? VMSite.util.LocalStorage.get($vars.keyCookie) : 'desktop' }
			var devices = {
				Mobile: [0, 40],
				Tablet: [40, 64],
				Desktop: [64, 90],
				HiRes: [90, 120],
				SuperHiRes: [120, 1000],
			}
			var deviceKeys = []
			for (var key in devices) {
				if (devices.hasOwnProperty(key)) {
					deviceKeys.push(key)
				}
			}

			var obj = {}
			obj.devices = deviceKeys
			obj.deviceAgent = window[$vars.keyWin].deviceAgent
			obj.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1
			obj.fontSize = parseFloat($('body').css('font-size'))
			obj.winWidth = $(window).width()
			obj.winHeight = $(window).height()
			obj.winWidthEms = obj.winWidth / obj.fontSize
			obj.winHeightEms = obj.winHeight / obj.fontSize
			obj.screenWidth = screen.width
			obj.screenWidthEms = screen.width / obj.fontSize
			obj.screenHeight = screen.height
			obj.screenHeightEms = screen.height / obj.fontSize
			obj.orientation = obj.winWidthEms > obj.winHeightEms ? 'landscape' : 'portrait'
			for (var type in devices) {
				if (obj.screenWidthEms >= devices[type][0] && obj.screenWidthEms < devices[type][1]) {
					obj.type = type
				}
				if (obj.winWidthEms >= devices[type][0] && obj.winWidthEms < devices[type][1]) {
					obj.view = type
				}
			}

			if (obj.deviceAgent === 'tablet') {
				$('body').attr('data-deviceagent', 'tablet')
			} else if (obj.deviceAgent === 'mobile') {
				$('body').attr('data-deviceagent', 'mobile')
			} else if (obj.deviceAgent === 'desktop') {
				$('body').attr('data-deviceagent', 'desktop')
			}

			$('body').removeClass('mobile').removeClass('tablet').removeClass('desktop')
			if (obj.view === 'Tablet') {
				$('body').addClass('tablet')
			} else if (obj.view === 'Mobile') {
				$('body').addClass('mobile')
			} else {
				$('body').addClass('desktop')
			}

			$('body').attr('data-deviceview', obj.view).attr('data-devicetype', obj.type)

			if (window.location.href.toLowerCase().indexOf($vars.urlFlag) > -1 && $('#' + $vars.domIDMsg).length === 0) {
				$('body').prepend('<div id="' + $vars.domIDMsg + '" style="background:yellow;padding:15px;border:1px red solid;text-align:center;font-weight:bold;">Request.UserDevice = ' + window[$vars.keyWin].deviceAgent + '</div>')
			}

			return obj
		},
		EmailCheck: function (email) {
			//Regex found here: http://emailregex.com/
			var emailRegex = /^[^\@\s]+\@[^\@\s\.]+(\.\w{2,}){1,}$/gi
			var email = email || ''
			email = $.trim(email)
			return !emailRegex.test(email) ? false : true
		},
		Hash: function (str, len, randomize) {
			var str = str || VMSite.util.RandomCode()
			var len = parseInt(len || 12)
			var randomize = typeof randomize === 'boolean' ? randomize : false
			var chr = 0
			for (var i in str) {
				chr += str.charCodeAt(i)
			}
			return !randomize ? (chr + Math.floor(chr * eval('1e' + (128 + len)))).toString(36).toUpperCase().split('').splice(0, len).join('') : (chr + Math.floor(Math.random() * eval('1e' + (128 + len)).toString()) + new Date().getMilliseconds()).toString(36).toUpperCase().split('').splice(0, len).join('')
		},
		Hex2Rgba: function (params) {
			// From http://stackoverflow.com/questions/21646738/convert-hex-to-rgba
			var paramsDefault = { hex: '#fff', alpha: '1', wrap: true, rgbOnly: false }
			var params = params || paramsDefault
			params = $.extend({}, paramsDefault, params)
			var output = ''
			var c
			if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(params.hex)) {
				c = params.hex.substring(1).split('')
				if (c.length == 3) {
					c = [c[0], c[0], c[1], c[1], c[2], c[2]]
				}
				c = '0x' + c.join('')
				output = [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')
				output = params.rgbOnly ? output : output + ',' + params.alpha
				return params.wrap ? 'rgb' + (params.rgbOnly ? '' : 'a') + '(' + output + ')' : output
			}
			return false
		},
		Loader: function (obj) {
			var defaults = { ele: $('body'), type: 'spinner', bgColor: '#fff', bgAlpha: '.85', color: '#666', size: '2', pad: '1em', inline: false, spinnerLeft: '50%', spinnerTop: '50%' }
			var obj = $.extend({}, defaults, obj) || defaults
			var inline = obj.inline ? 'display:inline-block;' : ''
			switch (obj.type) {
				case 'overlay':
					var loader = '<div><i class="fa fa-spinner fa-pulse fa-' + obj.size + 'x fa-fw"></i></div>'
					var loaderObj = $(loader)
					loaderObj.css({ position: 'absolute', left: '0', top: '0', width: '100%', height: obj.ele.innerHeight() + 'px', zIndex: 99999, background: VMSite.util.Hex2Rgba({ hex: obj.bgColor, alpha: obj.bgAlpha }), color: obj.color })
					obj.ele.append(loaderObj)
					var spinner = loaderObj.find('i')
					spinner.css({ position: 'absolute', display: 'block', left: obj.spinnerLeft, top: obj.spinnerTop, margin: '-' + spinner.outerWidth() / 2 + 'px 0px 0px -' + spinner.outerHeight() / 2 + 'px' })
					return loaderObj
					break
				default:
					var loader = '<div style="' + inline + 'padding:' + obj.pad + ';color:' + obj.color + ';"><i class="fa fa-spinner fa-pulse fa-' + obj.size + 'x fa-fw"></i></div>'
					obj.ele.html(loader)
					return true
			}
		},
		LocalStorage: {
			init: function () {
				VMSite.util.LocalStorage.settings = {
					lsObjKey: 'VintageMemorabilia',
					lsObjInit: {
						timestamp: new Date().getTime(),
						cacheKey: window.VMSiteCacheKey,
					},
				}
			},
			has: function (lsKey) {
				return this.do('has', lsKey)
			},
			get: function (lsKey) {
				return this.do('get', lsKey)
			},
			set: function (lsKey, lsVal) {
				return this.do('set', lsKey, lsVal)
			},
			del: function (lsKey) {
				return this.do('del', lsKey)
			},
			do: function (action, lsKey, lsVal) {
				var $util = VMSite.util
				var $LocalStorage = VMSite.util.LocalStorage
				var lsObjKey = $LocalStorage.settings.lsObjKey
				if (lsObjKey !== '') {
					var action = typeof action !== 'undefined' ? action : 'get'
					var lsKey = typeof lsKey == 'string' ? lsKey : ''
					var lsVal = typeof lsVal !== 'undefined' ? lsVal : null
					var lsObjInit = $LocalStorage.settings.lsObjInit
					if ($.totalStorage(lsObjKey) === null || action == 'init') {
						$.totalStorage(lsObjKey, lsObjInit)
					}
					var lsObj = $.extend(true, {}, lsObjInit, $.totalStorage(lsObjKey))
					switch (action) {
						case 'set':
							if (lsKey !== '') {
								lsObj = _.set(lsObj, lsKey, lsVal)
							}
							break
						case 'del':
							if (lsKey !== '') {
								_.unset(lsObj, lsKey)
							}
							break
						case 'has':
							return lsKey !== '' ? _.has(lsObj, lsKey) : false
							break
						default:
							if (lsKey !== '') {
								return typeof _.get(lsObj, lsKey) !== 'undefined' ? _.get(lsObj, lsKey) : false
							}
							break
					}
					if (action !== 'get') {
						lsObj.timestamp = new Date().getTime()
					}
					lsObj = $.extend(true, {}, lsObjInit, lsObj)
					$.totalStorage(lsObjKey, lsObj)
					return lsObj
				} else {
					return null
				}
			},
		},
		TimeElapsed: function (obj) {
			var defaultObj = { time: 0, unit: false, abbr: false }
			var obj = obj || defaultObj
			obj = $.extend({}, defaultObj, obj)
			var date = new Date()
			time = Math.round(obj.time)
			var time = time && time !== NaN ? date.getTime() - parseInt(time) : date.getTime()
			var unit = obj.unit
			var abbr = obj.abbr
			var allowedUnits = { s: 1000 }
			allowedUnits.m = allowedUnits.s * 60
			allowedUnits.h = allowedUnits.m * 60
			allowedUnits.d = allowedUnits.h * 24
			allowedUnits.w = allowedUnits.d * 7
			allowedUnits.mo = allowedUnits.d * 31
			allowedUnits.y = allowedUnits.d * 365
			var labels = { s: 'second', m: 'minute', h: 'hour', d: 'day', w: 'week', mo: 'month', y: 'year' }
			var labelsAbbr = { s: 'sec', m: 'min', h: 'hr', d: 'day', w: 'wk', mo: 'mo', y: 'yr' }
			if (unit) {
				unit = typeof allowedUnits[unit] !== 'undefined' ? unit : 'd'
				return Math.floor(time / allowedUnits[unit])
			} else {
				var thisVal = 0
				unit = 'y'
				arrUnits = ['s', 'm', 'h', 'd', 'w', 'mo', 'y']
				arrLimits = [60, 60, 24, 7, 5, 12, 1000000000000]
				for (i = 0; i < arrUnits.length; i++) {
					thisVal = Math.floor(time / allowedUnits[arrUnits[i]])
					if (thisVal < arrLimits[i]) {
						unit = arrUnits[i]
						break
					}
				}
				if (abbr) {
					var output = thisVal + ' ' + labelsAbbr[unit]
				} else {
					var output = thisVal + ' ' + labels[unit]
				}
				return thisVal === 1 ? output : output + 's'
			}
		},
		RandomCode: function (len) {
			var len = len || 12
			var chars = '23456789ABCDEFHJKLMNPRTVWXYZ'
			var str = ''
			for (var i = 0; i < len; i++) {
				str += chars[_.random(0, chars.length - 1)] //ALT: return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			return str
		},
	},
}
// Initialize local storage
VMSite.util.LocalStorage.init()

if (typeof module !== 'undefined' && module.exports) {
	module.exports = VMSite
}

/*
////////////////////////////////////
VM v2 - Initialize jQuery events on doc ready
///////////////////////////////////
*/
$.log = function (msg) {
	try {
		console.log('%s [%o]', msg, this)
		return this
	} catch (err) {}
}
$(function () {
	// Initialize VM component
	VMSite.init()

	/* FANCYBOX */
	$('a[data-fancybox-type="inline"]').fancybox({ maxWidth: 1000, maxHeight: 768 })
	$('a[data-fancybox-type="iframe"]').fancybox({
		maxWidth: 1024,
		maxHeight: 768,
		fitToView: false,
		width: '99%',
		height: '99%',
		autoSize: false,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none',
	})

	if (VMSiteColorSwitch) {
		$('body').find('.colorSwitch.text, .colorSwitch.border').addClass(VMSiteColorSwitch)
	}
})
