# PDF Files Setup

This directory contains the PDF files for the IJUP website downloads section.

## Current Files

### Available PDFs (Ready to use):
- `bank_transfer_form.pdf` - Bank transfer form for IJUP payments
- `registration_form.pdf` - Conference registration form  
- `membership_form.pdf` - Membership registration form for IJUP

### Placeholder PDFs (Need actual content):
- `manuscript_template.pdf` - Template for manuscript submission
- `copyright_form.pdf` - Copyright transfer form
- `reviewer_guidelines.pdf` - Guidelines for paper reviewers

## Original Source Files

The original .pages files are located in `/PDF's/` directory:
- `Bank transfer ijup .pages`
- `Registration FORM IJUP.pages` 
- `Registration Membership FORM IJUP.pages`

## To Do

1. **Convert .pages files to PDF**: Use Pages app or online converter to convert the .pages files to proper PDF format
2. **Replace placeholder PDFs**: Replace the placeholder PDF files with actual content
3. **Update file paths**: If you rename any files, update the paths in `src/pages/DownloadsPage.tsx`

## File Structure

```
public/
├── PDF's/                    # Original .pages files
├── bank_transfer_form.pdf    # Converted from .pages
├── registration_form.pdf     # Converted from .pages  
├── membership_form.pdf       # Converted from .pages
├── manuscript_template.pdf   # Placeholder (needs content)
├── copyright_form.pdf        # Placeholder (needs content)
└── reviewer_guidelines.pdf   # Placeholder (needs content)
```
