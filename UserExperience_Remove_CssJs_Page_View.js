/**
 * File: UserExperience_Remove_CssJs_Page_View.js
 *
 * @since 2.7.0
 *
 * @package W3TC
 *
 * @global W3TCRemoveCssJsData
 */

jQuery(function() {
	jQuery(document).on(
		'click',
		'#w3tc_remove_cssjs_singles_add',
		function() {
			let singlePath = prompt(W3TCRemoveCssJsData.lang.singlesPrompt);

			if (null === singlePath) {
				return;
			}

			singlePath = singlePath.trim();
			if (singlePath) {
				let exists = false;
				let maxID = -1;

				jQuery('.remove_cssjs_singles_path').each(
					function() {
						const currentID = parseInt(jQuery(this).closest('li').attr('id').replace('remove_cssjs_singles_', ''), 10);

						if (!isNaN(currentID)) {
							maxID = Math.max(maxID, currentID);
						}

						if (jQuery(this).val() === singlePath) {
							alert(W3TCRemoveCssJsData.lang.singlesExists);
							exists = true;
							return false;
						}
					}
				);

				if (!exists) {
					const singleID = maxID + 1;

					const li = jQuery(
						'<li id="remove_cssjs_singles_' + singleID + '">' +
						'<table class="form-table">' +
						'<tr class="accordion-header">' +
						'<th>' + W3TCRemoveCssJsData.lang.singlesPathLabel + '</th>' +
						'<td>' +
						'<input class="remove_cssjs_singles_path" type="text" name="user-experience-remove-cssjs-singles[' + singleID + '][url_pattern]" value="' + singlePath + '" > ' +
						'<input type="button" class="button remove_cssjs_singles_delete" value="' + W3TCRemoveCssJsData.lang.singlesDelete + '"/>' +
						'<span class="accordion-toggle dashicons dashicons-arrow-down-alt2"></span>' +
						'<p class="description">' + W3TCRemoveCssJsData.lang.singlesPathDescription + '</p>' +
						'<div class="description_example">' +
						'<p class="description_example_trigger"><span class="dashicons dashicons-editor-help"></span><span class="description_example_text">' + W3TCRemoveCssJsData.lang.singlesExampleTrigger + '</span></p>' +
						'<div class="description">' +
						'<strong>' + W3TCRemoveCssJsData.lang.singlesPathExampleDirLabel + '</strong>' +
						'<code>' + W3TCRemoveCssJsData.lang.singlesPathExampleDir + '</code>' +
						'<strong>' + W3TCRemoveCssJsData.lang.singlesPathExampleFileLabel + '</strong>' +
						'<code>' + W3TCRemoveCssJsData.lang.singlesPathExampleFile + '</code>' +
						'</div>' +
						'</div>' +
						'</td>' +
						'</tr>' +
						'<tr>' +
						'<th><label for="remove_cssjs_singles_' + singleID + '_action">' + W3TCRemoveCssJsData.lang.singlesBehaviorLabel + '</label></th>' +
						'<td>' +
						'<p class="description">' + W3TCRemoveCssJsData.lang.singlesBehaviorDescription + '</p>' +
						'<label class="remove_cssjs_singles_behavior"><input class="remove_cssjs_singles_behavior_radio" type="radio" name="user-experience-remove-cssjs-singles[' + singleID + '][action]" value="exclude" checked><strong>' + W3TCRemoveCssJsData.lang.singlesBehaviorExcludeText + '</strong> ' + W3TCRemoveCssJsData.lang.singlesBehaviorExcludeText2 + '</label>' +
						'<br/>' +
						'<label class="remove_cssjs_singles_behavior"><input class="remove_cssjs_singles_behavior_radio" type="radio" name="user-experience-remove-cssjs-singles[' + singleID + '][action]" value="include"><strong>' + W3TCRemoveCssJsData.lang.singlesBehaviorIncludeText + '</strong> ' + W3TCRemoveCssJsData.lang.singlesBehaviorIncludeText2 + '</label>' +
						'</td>' +
						'</tr>' +
						'<tr>' +
						'<th><label class="remove_cssjs_singles_' + singleID + '_includes_label" for="remove_cssjs_singles_' + singleID + '_includes">' + W3TCRemoveCssJsData.lang.singlesIncludesLabelExclude + '</label></th>' +
						'<td>' +
						'<textarea id="remove_cssjs_singles_' + singleID + '_includes" name="user-experience-remove-cssjs-singles[' + singleID + '][includes]" rows="5" cols="50" ></textarea>' +
						'<p class="description remove_cssjs_singles_' + singleID + '_includes_description">' + W3TCRemoveCssJsData.lang.singlesIncludesDescriptionExclude + '</p>' +
						'<div class="description_example">' +
						'<p class="description_example_trigger"><span class="dashicons dashicons-editor-help"></span><span class="description_example_text">' + W3TCRemoveCssJsData.lang.singlesExampleTrigger + '</span></p>' +
						'<div class="description">' +
						'<code>' + W3TCRemoveCssJsData.lang.singlesIncludesExample + '</code>' +
						'</div>' +
						'</div>' +
						'</td>' +
						'</tr>' +
						'<tr>' +
						'<th><label class="remove_cssjs_singles_' + singleID + '_includes_content_label" for="remove_cssjs_singles_' + singleID + '_includes_content">' + W3TCRemoveCssJsData.lang.singlesIncludesContentLabelExclude + '</label></th>' +
						'<td>' +
						'<textarea id="remove_cssjs_singles_' + singleID + '_includes_content" name="user-experience-remove-cssjs-singles[' + singleID + '][includes_content]" rows="5" cols="50" ></textarea>' +
						'<p class="description remove_cssjs_singles_' + singleID + '_includes_content_description">' + W3TCRemoveCssJsData.lang.singlesIncludesContentDescriptionExclude + '</p>' +
						'<div class="description_example">' +
						'<p class="description_example_trigger"><span class="dashicons dashicons-editor-help"></span><span class="description_example_text">' + W3TCRemoveCssJsData.lang.singlesExampleTrigger + '</span></p>' +
						'<div class="description">' +
						'<code>' + W3TCRemoveCssJsData.lang.singlesIncludesContentExample + '</code>' +
						'</div>' +
						'</div>' +
						'</td>' +
						'</tr>' +
						'</table>' +
						'</li>'
					);

					jQuery('#remove_cssjs_singles_empty').remove();
					jQuery('#remove_cssjs_singles').append(li);
					window.location.hash = '#remove_cssjs_singles_' + singleID;
					li.find('tr:not(:first-child)').slideToggle(50);
					li.find('tr:first-child td .description').first().toggle(50);
					li.find('tr:first-child td .description_example').toggle(50);
					li.find('.accordion-toggle').toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
					li.find('textarea').first().focus();
				}
			} else {
				alert(W3TCRemoveCssJsData.lang.singlesEmptyUrl);
			}
		}
	);

	jQuery(document).on(
		'change',
		'.remove_cssjs_singles_path',
		function() {
			let $inputField = jQuery(this);
			let singlePath = $inputField.val();
			let originalValue = $inputField.data('originalValue');

			if (null === singlePath) {
				return;
			}

			singlePath = singlePath.trim();
			if (singlePath) {
				let exists = false;

				jQuery('.remove_cssjs_singles_path').not($inputField).each(
					function() {
						if (jQuery(this).val() === singlePath) {
							alert(W3TCRemoveCssJsData.lang.singlesExists);
							exists = true;
							$inputField.val(originalValue);
							return false;
						}
					}
				);

				if (!exists) {
					$inputField.data('originalValue', singlePath);
				}
			} else {
				alert(W3TCRemoveCssJsData.lang.singlesEmptyUrl);
			}
		}
	);

	jQuery(document).on(
		'click',
		'.description_example_trigger',
		function () {
			var $trigger = jQuery(this).find('.description_example_text');
			var $description = jQuery(this).siblings('.description');
        	if ($description.css('display') === 'none') {
				$trigger.text(W3TCRemoveCssJsData.lang.singlesExampleTriggerClose);
            	$description.css('display', 'inline-block');
        	} else {
				$trigger.text(W3TCRemoveCssJsData.lang.singlesExampleTrigger);
            	$description.css('display', 'none');
        	}
		}
	);

	jQuery(document).on(
		'click',
		'.remove_cssjs_singles_delete',
		function () {
			if (confirm(W3TCRemoveCssJsData.lang.singlesDeleteConfirm)) {
				jQuery(this).parents('#remove_cssjs_singles li').remove();
				if (0 === jQuery('#remove_cssjs_singles li').length) {
					jQuery('#remove_cssjs_singles').append('<li id="remove_cssjs_singles_empty">' + W3TCRemoveCssJsData.lang.singlesNoEntries + '<input type="hidden" name="user-experience-remove-cssjs-singles[]"></li>');
				}
				w3tc_beforeupload_bind();
			}
		}
	);

	jQuery(document).on(
		'change',
		'.remove_cssjs_singles_behavior_radio',
		function () {
			const parentId = jQuery(this).closest('li').attr('id');
			if (this.value === 'exclude') {
				jQuery('.' + parentId + '_includes_label').text(W3TCRemoveCssJsData.lang.singlesIncludesLabelExclude);
				jQuery('.' + parentId + '_includes_description').text(W3TCRemoveCssJsData.lang.singlesIncludesDescriptionExclude);
				jQuery('.' + parentId + '_includes_content_label').text(W3TCRemoveCssJsData.lang.singlesIncludesContentLabelExclude);
				jQuery('.' + parentId + '_includes_content_description').text(W3TCRemoveCssJsData.lang.singlesIncludesContentDescriptionExclude);
			} else {
				jQuery('.' + parentId + '_includes_label').text(W3TCRemoveCssJsData.lang.singlesIncludesLabelInclude);
				jQuery('.' + parentId + '_includes_description').text(W3TCRemoveCssJsData.lang.singlesIncludesDescriptionInclude);
				jQuery('.' + parentId + '_includes_content_label').text(W3TCRemoveCssJsData.lang.singlesIncludesContentLabelInclude);
				jQuery('.' + parentId + '_includes_content_description').text(W3TCRemoveCssJsData.lang.singlesIncludesContentDescriptionInclude);
			}
		}
	);

	jQuery(document).on(
		'click',
		'.w3tc_remove_cssjs_singles .accordion-toggle',
		function() {
			var $icon = jQuery(this);
			var $table = $icon.closest('li').find('table');

			// Toggle visibility of all rows except the first one
			$table.find('tr:not(:first-child)').slideToggle(50);

			// Toggle visibility of .description and .description_example
			$icon.closest('td').find('.description').first().toggle(50);
			$icon.closest('td').find('.description_example').toggle(50);

			// Change the icon
			$icon.toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
		}
	);

	setRemoveCssjsSinglesPathValues();
});

function setRemoveCssjsSinglesPathValues() {
    jQuery('.remove_cssjs_singles_path').each(
		function() {
        	var $inputField = jQuery(this);
        	var originalValue = $inputField.val();
        	$inputField.data('originalValue', originalValue);
    	}
	);
}
