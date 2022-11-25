from django.shortcuts import render, redirect
from app.models import Category, Post, Comment
from app.forms import CommentForm
# Create your views here.
def Home(request):
    template_name = 'index.html'
    categories = Category.objects.all()
    recent_post = Post.objects.filter(approval=True, status='Publish')[:4]
    popular_post = Post.objects.filter(approval=True, status='Publish')[2:4]
    featured_post = Post.objects.filter(approval=True, status='Publish')[3:5]
    context = {
        'categories': categories,
        'recent_post': recent_post,
        'popular_post': popular_post,
        'featured_post': featured_post,
    }
    return render(request, template_name, context)

def Details(request, slug):
    template_name = 'details.html'
    post = Post.objects.get(slug=slug)
    categories = Category.objects.all()
    popular_post = Post.objects.filter(approval=True, status='Publish')[2:4]
    comments = Comment.objects.all()
    form = CommentForm()
    if request.method == 'POST':
        form = CommentForm(request.POST or None)
        """
        if form.is_valid(commit=False):
            f = form
            f.first_name = "Habeeb"
            f.save()
            redirect('post_details', f.slug)
        """
        if form.is_valid():
            f = form.save(commit=False)
            f.post = post
            f.save()
            form = CommentForm()
            redirect("post_details", post.slug)
        
    context = {
        'categories': categories,
        'popular_post': popular_post,
        'post': post,
        'form': form,
        'comments': comments
    }
    return render(request, template_name, context)