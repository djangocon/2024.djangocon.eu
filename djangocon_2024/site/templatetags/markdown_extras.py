import markdown as md
from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.filter()
@stringfilter
def markdown(value):
    r = {}
    f = open(value)
    f = f.read()
    m = md.Markdown(
        extensions=[
            "extra",
            "nl2br",
            "sane_lists",
            "meta",
            "toc",
        ]
    )
    r["html"] = m.convert(f)
    r["meta"] = m.Meta
    return r


@register.filter
def get_bg_type(counter):
    return counter % 2 == 0 and "dark-background" or "light-background"
